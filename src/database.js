const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.BASE_BANCO);
  console.log('📦 Conectado com o mongodb!')
}

main().catch((err) => console.log(err));

module.exports = mongoose;
