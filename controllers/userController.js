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

// export _________________________________________________________

module.exports = {
  getAllUser,
};
