require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is starting on ${PORT} port`));
  } catch (err) {
    console.log(err);
  }
};

start();
