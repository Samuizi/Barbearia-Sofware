const express = require("express");
const { json } = require("express/lib/response");
const routes = express.Router();

const userController = require("../controller/userController");

routes.post("/cadastro",userController.Register);
routes.post("/logar", userController.login, (req,res)=>{
    res.send("Usuário logado com sucesso")
})

module.exports = routes;