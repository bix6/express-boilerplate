require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, CLIENT_ORIGIN } = require("./config");
const validateBearerToken = require("./validate-bearer-token");
const errorHandler = require("./error-handler");
const foldersRouter = require("../src/folders/folders-router");
// const logger = require('./logger');

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "dev";

app.use(morgan(morganOption));
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);
// app.use(validateBearerToken);

app.get("/", (req, res) => {
  res.send("Hello, Jello!");
});

app.use("/api/folders", foldersRouter);

app.use(errorHandler);

module.exports = app;
