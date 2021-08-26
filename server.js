// ________________ CREATE SERVER ____________________

// require (import) __________________________________

require("dotenv").config();
const http = require("http");
const app = require("./app");

// set port __________________________________________

const PORT = process.env.PORT || 5000;

// create server _____________________________________

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`); // to make sure that the Server is working
});
