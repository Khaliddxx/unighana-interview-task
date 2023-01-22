# unighana-interview-task

Here is a rough outline of the steps that I took to build the login and register pages:

Created a new React application using create-react-app or any other similar tool.
Created a new MongoDB database and set up the connection to the database using Mongoose.
Created a new Express.js server and set up the routes for handling user registration and login.
Created a new React component for the registration page and another one for the login page.
Implemented the registration functionality by creating a new user in the database when the form is submitted and encrypt the password using bcrypt.
Implemented the login functionality by checking if the provided email and password match the ones stored in the database, then created and sign a JWT token using jsonwebtoken library.
Once the user is logged in, store the JWT token in the local storage and use it to authenticate the user on subsequent requests.
Displayed appropriate message or redirect to a protected page when the user is logged in successfully.

After that I did some quick styling.


# Steps to run those

To run the app, both the server and the client should be run locally.

## 1. The server

- Run npm install to install the node modules
- Run nodemon index.js to start the server in test mode. It is connected to a database through a key in the environment variables (hidden)
- Wait for a success console message


## 2. The client

- Run npm install
- Run npm start
- The pages are there now!

After logging in, a dashboard route will appear.



