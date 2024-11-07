pipeline {
    agent any

    environment {
        DATABASE_PASSWORD = 'password123'
        AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE'
        AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'aws s3 sync ./dist s3://mybucket'
            }
        }
    }
}

