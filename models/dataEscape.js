const mongoose = require("mongoose");

const dataEscapeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  lestUrl: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const DataEscape = mongoose.model("DataEscape", dataEscapeSchema);

module.exports = DataEscape;
