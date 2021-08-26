// require (import) __________________________________

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

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

// welcome message for root route "/" _______________

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the express rest API project");
});

// export app _______________________________________

module.exports = app;
