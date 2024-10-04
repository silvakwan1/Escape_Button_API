const express = require("express");
const DataEcape = require("../config/dataEcape");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express 0000" });
});

const connectToDatabase = require("../db");

connectToDatabase();

async function criarCachorro() {
  // Criando um novo cachorro com base no schema
  const novoCachorro = new DataEcape({
    text: "acacawcaw",
    lestUrl: "afawcawc",
    imgUrl: "wwwccsc",
  });

  // Salvando no MongoDB
  try {
    const resultado = await novoCachorro.save();
    console.log("Cachorro cadastrado:", resultado);
  } catch (error) {
    console.error("Erro ao cadastrar o cachorro:", error);
  }
}

criarCachorro();

module.exports = router;
