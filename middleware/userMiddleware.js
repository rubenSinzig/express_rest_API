// require (import) _______________________________________________

const userData = require("../model/userModel");
const express = require("express");

// Middleware to get one user _____________________________________

const getUser = async (req, res, next) => {
  // declare variable
  let user;

  // find the first one with this username
  try {
    user = await userData.findOne({ userName: req.params.userName });

    if (user == null) {
      // status 404 -> Not Found
      return res.status(404).json({ message: "Sorry, User NOT Found" });
    }
  } catch (err) {
    // status 500 -> Internal Server Error
    res.status(500).json({ message: err.message });
  }

  res.user = user; // <- For what do we need this?
  next();
};

/* Middleware to check that `userName`, `userPass`,
`age`, `fbw` and `email` is not empty _____________________________
*/

const checkUserInput = async (req, res, next) => {
  const { userName, userPass, age, fbw, email } = req.body;

  if (
    userName == null ||
    userPass == null ||
    age == null ||
    fbw == null ||
    email == null
  ) {
    // status 400 -> Bad Request (client error)
    return res.status(400).send("Please fill in the blanks.");
  }
  next();
};

// Middleware for user age ________________________________________

const checkAge = async (req, res, next) => {
  const { age } = req.body;

  if (age < 18) {
    // status 400 -> Bad Request (client error)
    return res.status(400).send("Sorry, your are too young.");
  }
  next();
};

// export _________________________________________________________

module.exports = {
  getUser,
  checkUserInput,
  checkAge,
};
