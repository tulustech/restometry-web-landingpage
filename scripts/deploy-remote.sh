#!/bin/sh
# Run on the deployment host. Jenkins has already synchronized source to build/.
set -eu

if [ "$#" -ne 5 ]; then
  echo "usage: $0 WORKSPACE PROJECT ENV_FILE APP_IMAGE SERVICE" >&2
  exit 64
fi

workspace=$1
project=$2
env_file=$3
app_image=$4
service=$5
common="$workspace/common"
build="$workspace/build"
current="$workspace/current"
previous="$workspace/previous"
fail() {
  echo "deployment error: $*" >&2
  exit 1
}

case "$workspace" in /*) ;; *) fail "workspace must be an absolute path" ;; esac
case "$workspace" in *[[:space:]]*) fail "workspace must not contain whitespace" ;; esac
case "$env_file" in .env) ;; *) fail "env_file must be .env" ;; esac
case "$project" in [a-z0-9]* ) ;; *) fail "invalid Compose project name" ;; esac
case "$project" in *[!a-z0-9_.-]*|'') fail "invalid Compose project name" ;; esac
case "$service" in *[!A-Za-z0-9_.-]*|'') fail "invalid service name" ;; esac
case "$app_image" in *[!A-Za-z0-9_./:-]*|'') fail "invalid image name" ;; esac

[ -f "$common/$env_file" ] || fail "missing required environment file: $common/$env_file"
[ -d "$common/data" ] || fail "missing required data directory: $common/data"
[ -d "$common/public" ] || fail "missing required public directory: $common/public"
[ -d "$build" ] || fail "missing synchronized build directory: $build"
[ ! -e "$previous" ] || fail "previous release exists; resolve it before deploying"

rm -rf "$build/$env_file"
ln -sfn "../common/$env_file" "$build/$env_file"
rm -rf "$build/data"
ln -sfn "../common/data" "$build/data"
rm -rf "$build/package/public"
mkdir -p "$build/package/public"
cp -R "$common/public/." "$build/package/public/"

(
  cd "$build"
  APP_IMAGE="$app_image" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" config -q
  APP_IMAGE="$app_image" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" build
  printf '%s\n' "$app_image" > .deploy-image
)

rollback() {
  echo "startup failed; restoring previous release" >&2
  if [ -d "$current" ]; then
    (
      cd "$current"
      APP_IMAGE="$(cat .deploy-image)" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" down --remove-orphans || true
    )
    rm -rf "$current"
  fi
  [ -d "$previous" ] || exit 1
  mv "$previous" "$current"
  (
    cd "$current"
    APP_IMAGE="$(cat .deploy-image)" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" up --detach --remove-orphans
  )
  exit 1
}

if [ -e "$current" ]; then
  mv "$current" "$previous"
fi
mv "$build" "$current"

if ! (
  cd "$current"
  APP_IMAGE="$(cat .deploy-image)" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" up --detach --remove-orphans
); then
  rollback
fi

attempt=0
while [ "$attempt" -lt 30 ]; do
  if (
    cd "$current"
    APP_IMAGE="$(cat .deploy-image)" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" ps --status running --services | grep -Fx "$service" >/dev/null &&
      APP_IMAGE="$(cat .deploy-image)" docker compose -f package/docker-compose.yml --project-name "$project" --env-file "$env_file" exec -T "$service" node -e 'fetch("http://127.0.0.1:3000/").then(response => process.exit(response.ok ? 0 : 1), () => process.exit(1))'
  ); then
    rm -rf "$previous"
    echo "deployment succeeded: $app_image"
    exit 0
  fi
  attempt=$((attempt + 1))
  sleep 1
done

rollback
