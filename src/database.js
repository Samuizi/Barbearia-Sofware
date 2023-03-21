const mongoose = require('mongoose');


// Conexão com banco de dados

function connectToDatabese() {
    mongoose.connect(
        process.env.DATABASE_URL,
        {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    }
);

const db = mongoose.connection;
db.on("error",(error) => console.log(error));
db.once("open",() => console.log("📦 Connect to the database!"));

}

module.exports = connectToDatabese;