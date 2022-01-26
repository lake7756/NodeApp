pipeline {
    agent any
    triggers { pollSCM('* * * * *') }
    tools {
        nodejs 'nodes'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/lake7756/NodeApp.git'
            }            
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm run executable'
                sh 'npm run xml'
            }
        
            post {
                always {
                    junit 'test-results.xml'
                    archiveArtifacts 'app'
                }
                changed {
                    emailext subject: "Job \'${JOB_NAME}\' (build ${BUILD_NUMBER}) ${currentBuild.result}",
                        body: "Please go to ${BUILD_URL} and verify the build", 
                        attachLog: true, 
                        compressLog: true, 
                        to: "test@jenkins",
                        recipientProviders: [upstreamDevelopers(), requestor()]
                }
            }
        }
    }
}
