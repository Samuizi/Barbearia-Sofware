const mongoose = require('mongoose');

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect("mongodb://localhost:27017/sqldados");
  console.log('Conectado com o mongodb!')
}

main().catch((err) => console.log(err));

module.exports = mongoose;
