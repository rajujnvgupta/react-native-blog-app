# 1
    mkdir jsonserver
# 2
    npm init
# 3
    npm install json-server ngrok

# 4 add below config in package.json
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