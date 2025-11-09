pipeline {
    agent any

    environment {
        PROJECT_REPO = 'Srini25vasu/jusmore-ev'
        BRANCH = 'main'
        XCODE_SCHEME = 'YOUR_PROJECT_SCHEME'
        XCODE_PROJECT_XCWORKSPACE = 'YOUR_PROJECT.xcworkspace'
        IOS_EXPORT_PLIST = "ExportOptions.plist"
        IOS_BUILD_PATH = "ios/build/"
        IOS_BUILD_FILE_NAME = "YOUR_PROJECT_NAME"
        ANDROID_BUILD_PATH = "android/app/build/outputs/apk/release/"
        ANDROID_BUILD_FILE_NAME = "app-release"
        FIREBASE_IOS_APP_ID = 'YOUR_FIREBASE_IOS_APP_ID_FROM_FIREBASE_SETTINGS'
        FIREBASE_ANDROID_APP_ID = 'YOUR_FIREBASE_ANDROID_APP_ID_FROM_FIREBASE_SETTINGS'
        TEST_GROUP = 'YOUR_PROJECT_TESTER_GROUP_FROM_FIREBASE'
        GOOGLE_APPLICATION_CREDENTIALS = credentials('firebase_service_account')
        RELEASE_NOTE_FILE_PATH = 'release_note.txt'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${PROJECT_REPO}"
            }
            
        }
        stage('Install React Native Packages') {
            steps {
                    sh "rm -rf node_modules/"
                    sh "rm -rf package-lock.json && rm -rf yarn.lock"
                    sh "npm install"
            }
        }
        stage('Install CocoaPods') {
            steps {
                sh "cd ios && rm -rf Pods && rm -rf Podfile.lock"
                sh "cd ios && export LC_ALL=en_US.UTF-8 && pod install"
            }
        }
        stage('Build APK') {
            steps {
                script {
                    sh "cd android && ./gradlew clean"
                    sh "cd android && ./gradlew assembleRelease"
                }
            }
        }
        stage('Archive IOS') {
            steps {
                script {
                    sh "cd ios && xcodebuild -workspace ${XCODE_PROJECT_XCWORKSPACE} -scheme ${XCODE_SCHEME} clean archive -archivePath ${IOS_BUILD_PATH}${IOS_BUILD_FILE_NAME}.xcarchive"
                }
            }
        }
        
        stage('Export IPA') {
            steps {
                script {
                    sh "cd ios && xcodebuild -exportArchive -archivePath ${IOS_BUILD_PATH}${IOS_BUILD_FILE_NAME}.xcarchive -exportPath ${IOS_BUILD_PATH} -exportOptionsPlist ${IOS_EXPORT_PLIST}"
                }
            }
        }
        
        stage('Firebase Distribution') {
            steps {
                script {
                    sh "firebase appdistribution:distribute ${ANDROID_BUILD_PATH}${ANDROID_BUILD_FILE_NAME}.apk --app ${FIREBASE_ANDROID_APP_ID} --groups ${TEST_GROUP} --release-notes-file ${RELEASE_NOTE_FILE_PATH}"
                    sh "firebase appdistribution:distribute ${IOS_BUILD_PATH}${IOS_BUILD_FILE_NAME}.ipa --app ${FIREBASE_IOS_APP_ID} --groups ${TEST_GROUP}  --release-notes-file ${RELEASE_NOTE_FILE_PATH}"
                }
            }
        }
    }
}