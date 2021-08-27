// require (import) ___________________________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const {
  getAllUser,
  addNewUser,
  updateUser,
  updateOneUser,
} = require("../controllers/userController");
const { getUser } = require("../middleware/userMiddleware");

// GET all users on root route users http://localhost:5000/users ______________________

router.route("/").get(getAllUser);

// Add (POST) new user on root route users http://localhost:5000/users ________________

router.route("/").post(addNewUser);

// Updated (PUT) all user data upon their name http://localhost:5000/users/:name ______

router.route("/:userName").put(getUser, updateUser);

// Updated (PATCH) one user data upon their name http://localhost:5000/users/:name ___

router.route("/:userName").patch(getUser, updateOneUser);

// export router _____________________________________________________________________

module.exports = router;
