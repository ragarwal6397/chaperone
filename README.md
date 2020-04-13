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


## Backend

### Requirements (In addition to mobile application requirements above):
  1. Python 3
  2. PostGreSQL 10.12
  3. Anaconda 3
  4. Psycopg2

### Setup:
  1. Setup PostGreSQL

      ```sudo su - postgres -c "createuser chaperone"```
      ```sudo su - postgres -c "createdb fazl"```
      ```sudo -u postgres psql```
      ```postgres=# grant all privileges on database fazl to chaperone```

  2. Install Django

      ```python3 -m pip install Django```

      Check to ensure it is installed by running ```which django-admin``` which should tell you where it is installed

  3. Install psycopg2

      ```pip install psycopg2```

  4. Install other Django dependencies

      ```pip install django-model-utils```
      ```pip install djangorestframework```

  3. Run migrations

      ```python3 manage.py makemigrations kavi```
      ```python3 manage.py migrate```

  4. Other useful commands

      Django shell: ```python3 manage.py shell```
      View SQL migration definitions (change 0003 to actual migration number): ```python3 manage.py sqlmigrate kavi 0003```
      Run Server: ```python3 manage.py runserver```

  5. Setup and access Django Admin

      Create Admin User: ```python manage.py createsuperuser```
      Enter username, email and password
      Run Server: ```python3 manage.py runserver```
      Navigate to ```localhost:8000/admin``` on a browser to access the admin console
