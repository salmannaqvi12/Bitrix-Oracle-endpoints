const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const indexRouter = require("./src/routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

module.exports = app;
