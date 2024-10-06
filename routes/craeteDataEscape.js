const express = require("express");
const router = express.Router();
const DataEscape = require("../models/dataEscape");

router.post("/", async (req, res, next) => {
  const { text, lestUrl, imgUrl } = req.body;

  if (!text) return res.status(400).json({ mensagem: "not fold tetx" });
  if (!lestUrl) return res.status(400).json({ mensagem: "not fold lest url" });
  if (!imgUrl) return res.status(400).json({ mensagem: "not fold img url" });

  try {
    const dateBtnEscape = new DataEscape({
      text,
      lestUrl,
      imgUrl,
    });

    const resBtnEscape = await dateBtnEscape.save();

    return res.status(201).json(resBtnEscape);
  } catch (error) {
    console.error;
  }
});

module.exports = router;
