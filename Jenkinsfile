pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Cloning repository...'
        git url: 'https://github.com/PushkarSAshtekar/nextjs-app.git', branch: 'main'
      }
    }

    stage('Build') {
      steps {
        echo '🔧 Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Develop') {
      steps {
        echo '⚙️ Building the Next.js app...'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running tests (optional)...'
        echo '✅ No tests defined yet.'
      }
    }

    stage('Release') {
      steps {
        echo '🚀 Starting the app...'
        sh 'nohup npm start &'
      }
    }
  }

  post {
    success {
      echo '✅ Build completed successfully!'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
