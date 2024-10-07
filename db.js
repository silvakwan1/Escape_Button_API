const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

const dbName = "EscapeButtonAPI";
async function connectToDatabase() {
  try {
    await mongoose.connect(url, {
      dbName: dbName,
    });
    console.log("Conectado ao MongoDB com sucesso!");

    return mongoose.connection;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

module.exports = connectToDatabase;
