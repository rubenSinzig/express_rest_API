// require (import) _________________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const { getAllUser, addNewUser } = require("../controllers/userController");

// GET all users on root route users http://localhost:5000/users ____________

router.route("/").get(getAllUser);

// Add (POST) new user on root route users http://localhost:5000/users ______

router.route("/").post(addNewUser);

// export router ____________________________________________________________

module.exports = router;
