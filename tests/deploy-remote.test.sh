#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
temp_dir=$(mktemp -d)
trap 'rm -rf "$temp_dir"' EXIT HUP INT TERM

workspace="$temp_dir/workspace"
mock_bin="$temp_dir/bin"
docker_log="$temp_dir/docker.log"

mkdir -p "$workspace/common/data" "$workspace/common/public/assets" \
  "$workspace/build/package/public" "$mock_bin"
printf '%s\n' 'NEXT_PUBLIC_SITE_URL=https://verify.example.com' > "$workspace/common/.env"
printf '%s\n' 'persistent asset' > "$workspace/common/public/assets/asset.txt"
printf '%s\n' 'services: {}' > "$workspace/build/package/docker-compose.yml"

cat > "$mock_bin/docker" <<'MOCK_DOCKER'
#!/bin/sh
printf '%s\n' "$*" >> "$DOCKER_LOG"
case "$*" in
  *'ps --status running --services'*) printf '%s\n' 'landing-page' ;;
esac
MOCK_DOCKER
chmod +x "$mock_bin/docker"

PATH="$mock_bin:$PATH" DOCKER_LOG="$docker_log" \
  sh "$repo_root/scripts/deploy-remote.sh" "$workspace" restometry .env \
  restometry:abc123-1 landing-page

test -f "$workspace/current/package/public/assets/asset.txt"
grep -F -- '-f package/docker-compose.yml' "$docker_log" >/dev/null
grep -F -- 'exec -T landing-page node -e' "$docker_log" >/dev/null
