const express = require("express");
const { json } = require("express/lib/response");
const routes = express.Router();
const jwt = require("jsonwebtoken");

require("dotenv").config();

const userController = require("../controller/userController");

routes.post("/cadastro",userController.Register);

routes.post("/logar", userController.login)

routes.get("/home", async(req, res, next) => {
    const token = req.cookies.token;
    console.log(token)
    const valid = await jwt.verify(token, process.env.SECRET);
    console.log(valid)
    if(!valid) {
        return res.json({msg: "Token Valido!"})
    };
    next();
},(req, res) => {
    res.send("logado!");
});

module.exports = routes;