const express = require("express");

const app = express();

const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("madeline", (filePath, options, callback) => {
  // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace("#image#", "<img src=" + options.image + "/>");
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the hypatia view engine

// app.get("/", function (req, res) {
//   res.send("<h1>hello</h1>");
// });

app.get("/", (req, res) => {
  res.render("template", {
    title: "Homepage",
    message: "Welcome to my website",
    content: "This is engine view",
  });
});

app.get("/about", (req, res) => {
  res.render("template", {
    title: "About Page",
    message: "I am a software engineer",
    content: "This is my journey",
  });
});

app.get("/skills", (req, res) => {
  res.render("template", {
    title: "Skills",
    message: "Technical Skills",
    content: "JavaScript, HTML, CSS, React, MERN",
  });
});

app.get("/interest", (req, res) => {
  res.render("template", {
    title: "Interest",
    message: "My Interest",
    content: "Basketball, stocks, coding",
  });
});

app.get("/food", (req, res) => {
  res.render("template", {
    title: "Food",
    message: "Favorite Food",
    content: "Chicken wings, seafood, pizza",
  });
});

app.get("/movies", (req, res) => {
  res.render("template", {
    title: "Favorite movie",
    message: "Comedy",
    content: "Elf, Grown Ups, Rush Hour, Hangover",
  });
});

app.get("/travel", (req, res) => {
  res.render("template2", {
    title: "Traveling",
    message: "Places to go",
    content: "Hawaii, Bali, Japan, Europe",
  });
});

app.get("/money", (req, res) => {
  res.render("template2", {
    title: "Investing",
    message: "Warren Buffet",
    content:
      "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.",
  });
});

app.get("/money2", (req, res) => {
  res.render("template2", {
    title: "Investing",
    message: "Warren Buffet",
    content:
      "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
  });
});

app.get("/Kobe", (req, res) => {
  res.render("template", {
    title: "Mamba",
    message: "Message from Kobe",
    content: "Dedication sees dreams come true.",
    image:
      "https://image.cnbcfm.com/api/v1/image/105464942-1537556383277gettyimages-102183935.jpeg?v=1566579981",
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
