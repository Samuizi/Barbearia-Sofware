const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = mongoose.model(
  "User",
  new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  })
);

module.exports = User;
