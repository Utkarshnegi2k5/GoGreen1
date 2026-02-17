pipeline{
    agent any
    tools
    {
        nodejs "Node-18"
    }
    
    environment{
        registryCredential = 'ecr:us-east-1:aws'
        appRegistry = "929992239223.dkr.ecr.us-east-1.amazonaws.com/gogreen"
        gogreenRegistry = "https://929992239223.dkr.ecr.us-east-1.amazonaws.com"
    }

    stages{
        stage("Fetch Code"){
            steps{
                git branch: 'main' , url:'https://github.com/Utkarshnegi2k5/GoGreen1.git'
            }
        }

        stage("Installing tools"){
            steps{
                sh 'npm install'
            }
        }
        
        stage("Check Python"){
            steps{
                sh 'python3 --version'
            }
        }

        stage("Precheck"){
            steps{
                sh 'python3 pipeline/precheck.py'
            }
        }

        stage("Sonar Code Analysis"){
            environment
            {
                scannerHome = tool 'Sonar 6.2'
            }
            steps
            {
                withSonarQubeEnv('Sonar Server'){
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        
        stage("Quality Gate"){
            steps{
                timeout(time: 2, unit: 'MINUTES'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage("Build app image"){
            steps{
                script{
                    dockerImage = docker.build(appRegistry + ":$BUILD_NUMBER", "./")
                }
            }
        }

        stage('Upload image'){
            steps{
                script{
                    docker.withRegistry(gogreenRegistry , registryCredential){
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
