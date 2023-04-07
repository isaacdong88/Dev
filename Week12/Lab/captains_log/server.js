require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.get("/", (req, res) => {
  res.render("New");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
