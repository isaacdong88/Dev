const express = require("express");
const app = express();
const PORT = 3000;
const magic8 = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
console.log(magic8.length);

app.get("/", (req, res) => {
  let bottles = 99;
  res.send(
    bottles +
      " Bottles of Coke on the wall" +
      "<br />" +
      `<a href='/98'>take one down, pass it around</a>`
  );
});

app.get("/:bottles", (req, res) => {
  bottles = req.params.bottles;
  if (bottles === "0") {
    res.send(
      bottles +
        " Bottles of Coke on the wall" +
        "<br />" +
        `<a href='/'}>Start Over</a>`
    );
  } else {
    res.send(
      bottles +
        " Bottles of Coke on the wall" +
        "<br />" +
        `<a href='/${bottles - 1}'>take one down, pass it around</a>`
    );
  }
});

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send("Wow! Hello there, " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send("Tip amount " + req.params.tipPercentage);
});

app.get("/magic", (req, res) => {
  res.send(
    req.query.question +
      "<h1>" +
      magic8[Math.floor(Math.random() * 20 + 1)] +
      "</h1>"
  );
});

app.get("//fibonnaci/:number", (req, res) => {
  let input = parseInt(req.params.number);
  let fib = [0, 1];
  for (i = 2; i <= input + 1; i++) {
    if (fib[fib.length - 1] < input) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
  }

  fibo = fib.includes(input);

  if (fibo) {
    res.send(req.params.number + " is a Fibonacci number" + "<br />" + fib);
  } else {
    res.send(req.params.number + " is not a Fibonacci number" + "<br />" + fib);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
