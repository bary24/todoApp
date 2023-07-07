const express = require("express");
const morgan = require("morgan");
const routers = require("./routes/routers");

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use("/", routers);

module.exports = app;
