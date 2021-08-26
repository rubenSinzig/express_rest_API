// require (import) __________________________________

const mongoose = require("mongoose");

// create Schema (blueprint) _________________________

const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  userPass: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: String,
    trim: true,
    required: true,
  },
  fbw: {
    type: String,
    trim: true,
    required: true,
  },
  toolStack: {
    type: Array,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  userAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("userData", userDataSchema);
