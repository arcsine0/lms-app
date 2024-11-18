# Welcome to **Smart Ticket**
This project is a feedback organizer integrated with Emotion-detection and Zero-class classification models.

# Requirements
- latest **Node.js** version

# Setup
After cloning this project, you will be presented with 2 directories representing the entire stack.

# Client 
The client side is handled by **React**, to set this up, head to the `client` directory and do:
```js
npm install dotenv
```
This installs all the dependencies + dotenv which we need to apply our environment variables to the app.

Considering that, for testing purposes, we're going to use my Firebase Firestore config for the app, we need to add a environment config file.
Create a file named `.env` then enter the following:
```
REACT_APP_API_KEY="AIzaSyAyU2PpTlsLWBdcWQcEIjoUj3zLeWOJxMU"
REACT_APP_AUTH_DOMAIN="feedback-org-f46b9.firebaseapp.com"
REACT_APP_PROJECT_ID="feedback-org-f46b9"
REACT_APP_STORAGE_BUCKET="feedback-org-f46b9.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="759888812002"
REACT_APP_APP_ID="1:759888812002:web:a91b555f37320f254f4bbb"
REACT_APP_MEASUREMENT_ID="G-9G1F3QG65D"
```
Once all the dependencies are installed, do a
```js
npm start
```

to run the React front-end.

# Server
The server code has been migrated to Express JS, to set this up, head to the  `server/js` directory and do:
```js
npm install nodemon
```
This installs all the dependencies + nodemon which we need so that our server will automatically restart when changes happen to the server code.

Once all the dependencies are installed, do a
```js
nodemon start
```

to run the Express back-end.

Originally, the server was handled by FastAPI Python. This was now migrated to Express JS to make hosting through Firebase Functions much easier, and workflow much more efficient and consistent. The original code for the Python back-end is inside `server/python` as a back-up, and for documentation.

# Testing
The models can be tested through the **Playground**. Other than that, the Instances themselves are connected to a Firebase app making them have data persistence. To feed feedbacks to created Instances, go to **Source** and input them there.


