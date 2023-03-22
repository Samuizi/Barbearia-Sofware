const mongoose = require("../src/database");
const UserModel = require("../models/User");
const { redirect } = require("express/lib/response");


class User{
    //Cadastrar usuário
    static async Register(req,res){
        console.log(req.body);
        const {name, age, email, password} = req.body;
        const user = new UserModel({name, age, email, password});
        await user.save();
        return res.send("Success");
    }

    static async login(req,res,next){
        const {email} = req.body;
        const user = await UserModel.findOne({email});
        console.log("database", user);

        if(!user){
            return res.send("Erro no login")
        }
        next();
    }
}



module.exports = User;