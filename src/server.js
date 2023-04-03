require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const path = require("path");
const mongo = require("../src/database");
const cookie = require("cookie-parser");



const app = express();

app.use(express.static(path.join(__dirname, "../views/public")));
app.use(express.json());
app.use(routes);
app.use(cookie());

//read body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`⚡ Backend started at http://localhost:${process.env.PORT}`);
});
