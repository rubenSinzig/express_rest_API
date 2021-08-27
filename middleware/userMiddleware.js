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

  // res.user = user; <- For what do we need this?
  next();
};

// export _________________________________________________________

module.exports = {
  getUser,
};
