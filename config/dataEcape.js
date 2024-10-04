const mongoose = require("mongoose");

const dataEcapeSchema = new mongoose.Schema({
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

const DataEcape = mongoose.model("DataEcape", dataEcapeSchema);

module.exports = DataEcape;
