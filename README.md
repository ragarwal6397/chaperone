# Folder Organization

- /akbaar/ - Mobile application
  - /akbaar/RideUsher
- /birbal/ - Backend server
- /tansen/ - Research projects to determine viability of various frameworks, libraries, etc.

# Build Environment Setup

## Mobile Application (Ionic Framework)

### Requirements
  1. macOS X Catalina +
  2. Xcode 11.4 +
  3. Xcode command line tools
  4. Android Studio
  5. Node
  6. Yarn
  7. Git

### Setup
  1. Install Ionic command line utility
  
      ```$ npm install -g @ionic/cli```
  2. Install Xcode command line tools
  
      ```$ xcode-select --install```
  3. Setup iOS simulator (do not run Cordova setup)
        
        https://ionicframework.com/docs/developing/ios
  
  4. Setup Android build environment (do not run Cordova setup)
      
        https://ionicframework.com/docs/developing/android
  
  5. Install project packages
  
      ```
      $ cd <workspace>/chaperone/akbaar/RideUsher/
      $ npm install
      ```
    

### Execute Project
  1. iOS
  
      ```$ ionic cap run ios -l --external```
  2. Android
  
      ```$ ionic cap run android -l --external```
