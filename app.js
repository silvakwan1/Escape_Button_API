const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index");
const craeteDataEscapeRouter = require("./routes/craeteDataEscape");
const getDateEscapeRouter = require("./routes/getDateEscape");

const app = express();
const connectToDatabase = require("./db");
connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/craeteDataEscape", craeteDataEscapeRouter);
app.use("/getdate", getDateEscapeRouter);

app.listen(3000, () => {
  console.log("serve oline");
});

module.exports = app;
