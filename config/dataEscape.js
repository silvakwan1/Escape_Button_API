const mongoose = require("mongoose");

const dataEscapeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
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
