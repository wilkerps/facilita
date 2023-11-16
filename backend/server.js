const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/facilita");

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running!"));