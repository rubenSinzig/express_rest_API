// require (import) _______________________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const {
  getAllUser,
  addNewUser,
  updateUser,
} = require("../controllers/userController");
const { getUser } = require("../middleware/userMiddleware");

// GET all users on root route users http://localhost:5000/users __________________

router.route("/").get(getAllUser);

// Add (POST) new user on root route users http://localhost:5000/users ____________

router.route("/").post(addNewUser);

// Updated (PUT) one user upon their name http://localhost:5000/users/:name _______

router.route("/:userName").put(getUser, updateUser);

// export router __________________________________________________________________

module.exports = router;
