require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.set("useFindAndModify", false);

app.use(require("./src/routes.js"));

app.listen(process.env.PORT || 3030, () => {
  console.log("server running");
});
