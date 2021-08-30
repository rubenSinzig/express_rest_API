const userData = require("../model/userModel");
const express = require("express");

// display all users in DB http://localhost:5000/users (GET) _______________

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

// add new user (POST) _____________________________________________________

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
    const newUser = await user.save();

    // status 201 -> Created
    res.status(201).json({
      message: `${newUser.userName} is successfully created`,
      data: newUser,
    });
  } catch (err) {
    // status 400 -> Bad Request (client error)
    res.status(400).json({ message: err.message });
  }
};

// update all user data (PUT) _____________________________________________

const updateUser = async (req, res) => {
  try {
    await userData.updateOne(
      // returns with the first username found in the DB
      { userName: req.params.userName },

      // defines which parameters the user is allowed to update
      {
        $set: {
          userName: req.body.userName,
          userPass: req.body.userPass,
          age: req.body.age,
          toolStack: req.body.toolStack,
          email: req.body.email,
        },
        // changes the date when the user registered to the date when the data was changed
        $currentDate: {
          userUpdated: Date.now,
        },
      }
    );

    // status 200 -> OK
    res.status(200).json({ message: "Data was successfully updated" });
  } catch (err) {
    // status 400 -> Bad Request (client error)
    res.status(400).json({ message: err.message });
  }
};

// update one user data (PATCH) ____________________________________________

const updateOneUser = async (req, res) => {
  const { userName, userPass, age, toolStack, email } = req.body;

  console.log(email);
  // checks which parameter should be changed
  if (userName) {
    res.user.userName = userName;
  }
  if (userPass) {
    res.user.userPass = userPass;
  }
  if (age) {
    res.user.age = age;
  }
  if (toolStack) {
    res.user.toolStack = toolStack;
  }
  if (email) {
    res.user.email = email;
  }

  try {
    await res.user.save();
    // status 200 -> OK
    res.status(200).json({ message: "Data Updated", data: res.user });
  } catch (err) {
    // status 400 -> Bad Request (client error)
    res.status(400).json({ message: err.message });
  }
};

// display one users in DB http://localhost:5000/display/:name (GET) _________

const getOneUser = async (req, res) => {
  res.status(200).json(res.user);
};

// export __________________________________________________________________

module.exports = {
  getAllUser,
  addNewUser,
  updateUser,
  updateOneUser,
  getOneUser,
};
