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

// Middleware for user is in the right class ______________________

const checkClass = async (req, res, next) => {
  const { fbw } = req.body;

  if (fbw != 48) {
    // status 400 -> Bad Request (client error)
    return res.status(400).send("Sorry, your are not in FBW-48.");
  }
  next();
};

// Middleware to display the username first letter capitalized _____

const firstLetterCapitalized = async (req, res, next) => {
  // grab username
  const { userName } = res.user;

  // capitalized first letter
  const userNameResult = userName.charAt(0).toUpperCase() + userName.slice(1);

  // output the result
  res.user.userName = userNameResult;
  next();
};

// Middleware to sort the toolStack Array alphabetically __________

const sortAlphabetically = async (req, res, next) => {
  // grab toolstack Array
  const { toolStack } = res.user;

  // sort the Array alphabetically
  const sortedArray = toolStack.sort();

  // output the result
  res.user.toolStack = sortedArray;
  next();
};

// Middleware to turn age and fbw to number _______________________

const stringToNum = async (req, res, next) => {
  // grab age and fbw from DB
  const { age, fbw } = res.user;

  // convert String to Number
  const ageToNum = parseInt(age);
  const fbwToNum = parseInt(fbw);

  // console.log(ageToNum, fbwToNum, age, fbw);

  // output the result
  // the problem is that it give still an String back not a Number. I think it is because of the type in the Schema (userModel.js)
  res.user.age = ageToNum;
  res.user.fbw = fbwToNum;
  next();
};

// export _________________________________________________________

module.exports = {
  getUser,
  checkUserInput,
  checkAge,
  checkClass,
  firstLetterCapitalized,
  sortAlphabetically,
  stringToNum,
};
