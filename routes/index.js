const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ msn: "rodando" });
});

module.exports = router;
