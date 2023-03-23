const mongoose = require("../src/database");
const UserModel = require("../models/User");
const { redirect } = require("express/lib/response");
const bcrypt = require("bcrypt");

class User {


  //Cadastrar usuário
  static async Register(req, res) {
    console.log("form ", req.body);
    const { name, age, email, password } = req.body;
    const exists = await UserModel.findOne({ email });

    console.log("validate register ", exists);
    if (exists) {
      return res.status(200).json({ msg: "Email já registrado! " });
    }

    const sault = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, sault);

    const user = new UserModel({ name: name, age: age, email: email, password: passwordHash });
    await user.save();
    return res.status(200).json({ msg: "Success" });
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log("database", user);

    if (!user) {
      return res.status(200).json({msg: "Erro no login"});
    }

    const validatePass = await bcrypt.compare(password, user.password);
    console.log("validate pass", validatePass);
    if(!validatePass){
        return res.status(200).json({msg: "Erro no login"});
    }

    console.log("Usuário logado !", user);
    return res.status(200).json({msg: "Usuário logado com sucesso!"})
  }
}

module.exports = User;
