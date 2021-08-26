// require (import) ____________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const { getAllUser } = require("../controllers/userController");

// GET all users on root route users http://localhost:5000/users ______

router.route("/").get(getAllUser);

// export router ______________________________________________________

module.exports = router;
