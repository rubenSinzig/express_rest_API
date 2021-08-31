// require (import) ___________________________________________________________________

const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const userCon = require("../controllers/userController");
const userMd = require("../middleware/userMiddleware");

// GET all users on root route users http://localhost:5000/users ______________________

router.route("/").get(userCon.getAllUser);

// Add (POST) new user on root route users http://localhost:5000/users ________________

router
  .route("/")
  .post(
    userMd.checkUserInput,
    userMd.checkAge,
    userMd.checkClass,
    userCon.addNewUser
  );

// Updated (PUT) all user data upon their name http://localhost:5000/users/:name ______

router.route("/:userName").put(userMd.getUser, userCon.updateUser);

// Updated (PATCH) one user data upon their name http://localhost:5000/users/:name ___

router.route("/:userName").patch(userMd.getUser, userCon.updateOneUser);

// GET one user on display http://localhost:5000/display/:name _______________________

router
  .route("/:userName")
  .get(
    userMd.getUser,
    userMd.firstLetterCapitalized,
    userMd.sortAlphabetically,
    userMd.stringToNum,
    userCon.getOneUser
  );

// export router _____________________________________________________________________

module.exports = router;
