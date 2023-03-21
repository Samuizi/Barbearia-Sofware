const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'barBer';


function dataBaseCadastro() {
app.use(bodyParser.json());

app.post('/cadastro', function (req, res) {
    const usuario = req.body;

    MongoClient.connect(url,{useNewUrlParser:true}, function(err, client){
        const db = client.db(dbName);
        const collection = db.collection('usuarios');

        collection.isertOne(usuario ,function(err, result){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                console.log('Usuário cadastrado com sucesso');
                res.sendStatus(200);
            }
            client.close();
        });
    });
});

app.listen(port, function(){
    console.log(`Servidor excultando na porta${port}`)
    });
};

module.exports = dataBaseCadastro;