const userData = require("../model/userModel");
const express = require("express");

// display all users in DB http://localhost:5000/users (GET) ______

const getAllUser = async (req, res) => {
  try {
    const users = await userData.find();

    // status 200 -> OK
    res.status(200).json(users);
  } catch (err) {
    // status 500 -> Internal Server Error
    res.status(500).json({ message: err.message });
  }
};

// add new user ___________________________________________________

const addNewUser = async (req, res) => {
  const user = new userData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    // save new user
    const newUser = await employee.save();

    // status 201 -> Created
    res
      .status(201)
      .json({ message: `${newUser.userName} is successfully created` });
  } catch (err) {
    // status 400 -> Bad Request (client error)
    res.status(400).json({ message: err.message });
  }
};

// export _________________________________________________________

module.exports = {
  getAllUser,
  addNewUser,
};
