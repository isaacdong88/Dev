require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Log = require("./models/logs.js");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/logs/new", (req, res) => {
  res.render("New");
});

//create route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.shipIsBroken = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.shipIsBroken = false; //do some data correction
  }
  //   res.send(req.body);
  Log.create(req.body, (error, createdLog) => {
    // res.send(createdLog);
    res.redirect("/logs/new");
  });

  //   fruits.push(req.body);
  //   console.log(fruits);
  //   res.send("data received");
  //   res.redirect("/fruits");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
