// require (import) __________________________________

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// use express && morgan  ____________________________

const app = express();
app.use(morgan("dev")); // console.log(app.use(morgan("dev"))) <------ take a look again. why we need this line?

app.use(express.json()); // process the json data
