pipeline {
  agent any
  stages {
    stage('git clone') {
      steps {
        git(url: 'E:/workspace2/OldClassmateFront', branch: 'dev', changelog: true, credentialsId: '18fdd937-805e-4458-ba7f-c75d72648ffd')
      }
    }
  }
}