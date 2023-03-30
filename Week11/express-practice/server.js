//-----------------------{main Requirement}
//Load Express - Require Statement
const express = require("express");

//Initialize Exprees, creating an instance of express
const app = express();

const PORT = 3000;

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

//-----------------------{Middleware}

//-----------------------{Routing}
//first part is path, second part is callback function req,res need to be their
// app.get("/", function (req, res) {
//   res.send("<h1>Hello World</h1>");
// });

//these routes need to be before the parameter path, cant have multiple res.send statement per request
app.get("/", function (req, res) {
  res.send("<h1>HomePage</h1>");
});

app.get("/home", function (req, res) {
  res.send("<h1>HomePage</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>About Me</h1>");
});

app.get("/awesome", (req, res) => {
  //this will never be reached
  res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
});

app.get("/hello/:firstname/:lastname", (req, res) => {
  console.log(req.params);
  res.send("hello " + req.params.firstname + " " + req.params.lastname);
});

// localhost:3000/howdy/bob?title=duke
app.get("/howdy/:firstName", function (req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send("hello " + req.query.title + " " + req.params.firstName);
});

app.get("/:plantsArray", (req, res) => {
  res.send(plants[req.params.plantsArray]); //this creates a path for each plant in the array using index number for path name
});

//-----------------------{Server Info}
//Create an Instance of a server, tell app to listen on port 3000 for HTTP requests from client
app.listen(PORT, () => {
  console.log(`Currently Listening on Port ${PORT}`);
});
