const express = require("express");
const router = express.Router();
const DataEscape = require("../models/dataEscape");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID não fornecido" });
    }

    const data = await DataEscape.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Dados não encontrados" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    res.status(500).json({ message: "Erro ao buscar dados no servidor" });
  }
});

module.exports = router;
