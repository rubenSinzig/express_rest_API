// require (import) __________________________________

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const user = require("./router/user");

// use express && morgan  ____________________________

const app = express();
app.use(morgan("dev")); // concise output colored by response status for development use (status)

app.use(express.json()); // process the json data

const DB_URL = process.env.DB_URL; // url for mongoDB

// connection to mongoDB  ____________________________

mongoose
  .connect(DB_URL)
  .then(console.log(`mongoDB is connected. url : ${DB_URL}`))
  .catch((err) =>
    console.log(`DB is NOT connected see error message : ${err.message}`)
  );

// root route for users "/users" ____________________

app.use("/users", user);

// welcome message for root route "/" _______________

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the express rest API project");
});

// root route for display "/display" ________________

app.get("/display", (req, res) => {
  res
    .status(200)
    .send(
      "Please add your [userName] instead of :userName in the url -> http://localhost:5000/display/:userName"
    );
});

app.use("/display", user);

// export app _______________________________________

module.exports = app;
