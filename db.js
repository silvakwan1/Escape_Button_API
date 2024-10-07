const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const DB_PASS;
const dbName = "EscapeButtonAPI";

const url = process.env.MONGODB_URI

`mongodb+srv://${dbUser}:${dbPass}@cluster0.q0hds.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

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
