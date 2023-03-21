require("dotenv").config();
const express = require('express');
const routes = require ('./routes');
const path = require('path');

const connectToDatabase = require('./database');


connectToDatabase();



const port = 3333;
const app = express();

app.use(express.static('./public'))

app.listen(port,()=>{console.log(`⚡ Backend started at http://localhost:${port}`);
});

