const mongoose = require("../src/database");
const UserModel = require("../models/User");
const routes = require("./../src/routes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
class User {

  //Cadastrar usuário
  static async Register(req, res) {
    console.log("form ", req.body);
    const { name, age, email, password } = req.body;
    const exists = await UserModel.findOne({ email });

    console.log("validate register ", exists);
    if (exists) {
      return res.status(200).send("Email já registrado! ");
    }

    const sault = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, sault);

    const user = new UserModel({ name: name, age: age, email: email, password: passwordHash });
    await user.save();
    res.redirect('http://localhost:3000');
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log("database", user);

    if (!user) {
      return res.status(200).send("Erro no login");
    }

    const validatePass = await bcrypt.compare(password, user.password);
    console.log("validate pass", validatePass);
    if(!validatePass){
        return res.status(200).send("Erro no login");
    }

   
    const token = await jwt.sign({user:user._id}, process.env.SECRET, {expiresIn:"10s"});
    res.cookie("token",token);
  }
}

module.exports = User;
