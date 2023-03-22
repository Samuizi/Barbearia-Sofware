require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const path = require("path");
const mongo = require("../src/database");



const port = 3333;
const app = express();

app.use(express.static(path.join(__dirname, "../views/public")));
app.use(express.json());
app.use(routes);

//read body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
