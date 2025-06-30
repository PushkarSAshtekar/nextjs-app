pipeline {
    agent any

    environment {
        NODE_ENV = "development"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Cloning repository..."
                git 'https://github.com/PushkarSAshtekar/nextjs-app.git'
            }
        }

        stage('Build') {
            steps {
                echo "🔧 Installing dependencies..."
                bat 'npm install'
            }
        }

        stage('Develop') {
            steps {
                echo "🚀 Starting development build..."
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                bat 'npm test'
            }
        }

        stage('Release') {
            steps {
                echo "📦 Releasing application..."
                // You can add deployment commands here if needed
            }
        }
    }

    post {
        success {
            echo "✅ Build succeeded!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}
