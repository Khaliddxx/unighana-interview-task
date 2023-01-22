// This code creates a new Mongoose schema for a user with an email and a password field.
// The email field is set as required and unique,
// so that the same email cannot be used to register multiple users.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
