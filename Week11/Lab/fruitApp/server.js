//Requirements
const express = require("express");
const app = express();
const PORT = 3000;
const fruits = require("./models/fruits.js");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

//Routes

//------[Index]
// app.get("/fruits/:indexOfFruitsArray", function (req, res) {
//   res.render("Show");
// });

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/fruits", (req, res) => {
  res.render("Index", { fruits: fruits });
  // res.render('Index', {fruits: fruits}) //this is the goal and not always use res.send
});

//New routes
app.get("/fruits/new", (req, res) => {
  res.render("New");
});

//-----[Post ROute]
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  //   res.send("data received");
  res.redirect("/fruits");
});

//----------[Show]

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

//Server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
