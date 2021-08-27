// require (import) __________________________________

const mongoose = require("mongoose");

// create Schema (blueprint) _________________________

const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "Please enter a username"],
  },
  userPass: {
    type: String,
    trim: true,
    required: [true, "Please enter a password"],
  },
  age: {
    type: String,
    trim: true,
    required: [true, "Please enter an age"],
  },
  fbw: {
    type: String,
    trim: true,
    required: [true, "Please enter the number of your class"],
  },
  toolStack: {
    type: Array,
    required: [true, "Please enter your skills"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter your email"],
  },
  userAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userUpdated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("userData", userDataSchema);
