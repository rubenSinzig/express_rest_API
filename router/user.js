// require (import) ___________________________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const {
  getAllUser,
  addNewUser,
  updateUser,
  updateOneUser,
  getOneUser,
} = require("../controllers/userController");
const {
  getUser,
  checkUserInput,
  checkAge,
  checkClass,
  firstLetterCapitalized,
  sortAlphabetically,
  stringToNum,
} = require("../middleware/userMiddleware");

// GET all users on root route users http://localhost:5000/users ______________________

router.route("/").get(getAllUser);

// Add (POST) new user on root route users http://localhost:5000/users ________________

router.route("/").post(checkUserInput, checkAge, checkClass, addNewUser);

// Updated (PUT) all user data upon their name http://localhost:5000/users/:name ______

router.route("/:userName").put(getUser, updateUser);

// Updated (PATCH) one user data upon their name http://localhost:5000/users/:name ___

router.route("/:userName").patch(getUser, updateOneUser);

// GET one user on display http://localhost:5000/display/:name _______________________

router
  .route("/:userName")
  .get(
    getUser,
    firstLetterCapitalized,
    sortAlphabetically,
    stringToNum,
    getOneUser
  );

// export router _____________________________________________________________________

module.exports = router;
