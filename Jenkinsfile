pipeline {
  agent any

  parameters {
    credentials(
      name: 'SSH_CREDENTIALS_ID',
      defaultValue: 'dev0-deploy-key',
      credentialType: 'com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey',
      required: true
    )
  }

  options {
    ansiColor('xterm')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '30', artifactNumToKeepStr: '10'))
    disableConcurrentBuilds()
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        script {
          def branch = env.BRANCH_NAME ?: ''
          env.DEPLOYABLE = (branch ==~ /^deploy\/[A-Za-z0-9][A-Za-z0-9_-]*$/ && !env.CHANGE_ID) ? 'true' : 'false'
          if (env.DEPLOYABLE != 'true') {
            echo "Skipping deployment: '${branch}' is not a direct deploy/<environment> branch build."
          }
        }
      }
    }

    stage('Load deployment configuration') {
      when { expression { env.DEPLOYABLE == 'true' } }
      steps {
        script {
          def environmentName = env.BRANCH_NAME.replaceFirst('^deploy/', '')
          def configFile = "deploy/${environmentName}.yml"
          if (!fileExists(configFile)) {
            error("Missing deployment configuration: ${configFile}")
          }

          def config = readYaml(file: configFile)
          if (!(config instanceof Map)) {
            error("${configFile} must contain a YAML mapping")
          }
          def required = ['deploy_hostname', 'deploy_username', 'deploy_workspace', 'deploy_project', 'env_file']
          required.each { key ->
            if (!(config[key] instanceof String) || !config[key].trim()) {
              error("${configFile} requires a non-empty '${key}' value")
            }
          }
          if (!(config.deploy_hostname ==~ /^[A-Za-z0-9][A-Za-z0-9.-]*$/)) error("${configFile} has an invalid deploy_hostname")
          if (!(config.deploy_username ==~ /^[A-Za-z_][A-Za-z0-9_-]*$/)) error("${configFile} has an invalid deploy_username")
          if (!config.deploy_workspace.startsWith('/') || config.deploy_workspace =~ /\s/) error("${configFile} requires an absolute deploy_workspace without whitespace")
          if (!(config.deploy_project ==~ /^[a-z0-9][a-z0-9_.-]*$/)) error("${configFile} has an invalid deploy_project")
          if (config.env_file != '.env') error("${configFile} env_file must be .env")

          env.DEPLOY_HOSTNAME = config.deploy_hostname
          env.DEPLOY_USERNAME = config.deploy_username
          env.DEPLOY_WORKSPACE = config.deploy_workspace
          env.DEPLOY_PROJECT = config.deploy_project
          env.DEPLOY_ENV_FILE = config.env_file
          def commit = sh(returnStdout: true, script: 'git rev-parse --short=12 HEAD').trim()
          env.APP_IMAGE = "${config.deploy_project}:${commit}-${env.BUILD_NUMBER}"
          currentBuild.description = "${environmentName} ${commit}"
        }
      }
    }

    stage('Deploy') {
      when { expression { env.DEPLOYABLE == 'true' } }
      steps {
        sshagent(credentials: [params.SSH_CREDENTIALS_ID]) {
          sh '''#!/bin/sh
set -eu

ssh -o BatchMode=yes -o StrictHostKeyChecking=yes "$DEPLOY_USERNAME@$DEPLOY_HOSTNAME" sh -s -- "$DEPLOY_WORKSPACE" <<'REMOTE'
set -eu
workspace=$1
case "$workspace" in /*) ;; *) exit 64 ;; esac
mkdir -p "$workspace"
rm -rf -- "$workspace/build"
REMOTE

rsync --archive --delete --compress \
  --exclude='.git/' \
  --exclude='.env' \
  --exclude='.deploy-image' \
  --exclude='node_modules/' \
  --exclude='/data/' \
  --exclude='/public/' \
  -e 'ssh -o BatchMode=yes -o StrictHostKeyChecking=yes' \
  ./ "$DEPLOY_USERNAME@$DEPLOY_HOSTNAME:$DEPLOY_WORKSPACE/build/"

ssh -o BatchMode=yes -o StrictHostKeyChecking=yes "$DEPLOY_USERNAME@$DEPLOY_HOSTNAME" sh -s -- \
  "$DEPLOY_WORKSPACE" "$DEPLOY_PROJECT" "$DEPLOY_ENV_FILE" "$APP_IMAGE" landing-page \
  < scripts/deploy-remote.sh
'''
        }
      }
    }
  }

  post {
    success { echo "\u001B[32mDeployment pipeline completed successfully.\u001B[0m" }
    failure { echo "\u001B[31mDeployment pipeline failed. The active release was preserved or rolled back.\u001B[0m" }
    always { cleanWs(deleteDirs: true, disableDeferredWipeout: true) }
  }
}
