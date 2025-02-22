# 1 setup android emulator
# 2 create emulator instance
# 3 start emulator

# 4 create app blog
    npx create-expo-app --template
# 5
    npm install
# 6 install below dependency

    1. npm install react-navigation@4.4.4 --legacy-peer-deps
    2. npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps
    3. npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

# 7 start app
    npm start
# enter enter url into expo go app inside your emulator and hit connect
    Metro waiting on exp://172.20.10.3:8081

# Cheers! good to go with you app development


## steps to json server setup json-server setup for app
# 1
    mkdir jsonserver
# 2
    cd jsonserver
# 3
    npm init
# 4
    npm install json-server ngrok
# 5 add below config in package.json
  "scripts": {
    "db": "json-server -w db.json",
    "tunnel": "ngrok http 3000"
  },

# 5 login to below user and do signup
    https://dashboard.ngrok.com/signup
# 6 use generated token in below command
    ngrok config add-authtoken $YOUR_AUTHTOKEN
# 7
    npm run db
# 8
    ngrok http http://localhost:3000
# 9
    =>add baseURL generate on console into src/api/jsonServer.js

# Cheers! server setup is complete.



# Resource references
# 1 use below url for and icon
https://github.com/expo/vector-icons