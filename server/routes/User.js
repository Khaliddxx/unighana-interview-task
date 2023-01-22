// This code imports the required modules, then creates two routes:
// /register and /login.

// The /register route takes in data from the registration form,
// checks if the email is already in use,
// hashes the password and creates a new user in the database.

// The /login route takes in data from the login form,
// checks if the email and password match the ones stored in the database and creates and signs a JWT token.

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already in use");
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    // create and sign a JWT
    const token = jwt.sign({ userId: user._id }, "secretkey");

    // send the token as a response
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering new user please try again.");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the email and password are correct
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Email or password is incorrect");
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).send("Email or password is incorrect");
    }

    // create and sign a JWT
    const token = jwt.sign({ userId: user._id }, "secretkey");

    // send the token as a response
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in please try again.");
  }
});

module.exports = router;
