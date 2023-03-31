console.log("heelo");
//Type node in terminal to enter Node's REPL

//This can create new files in your folder
const fs = require("fs");
console.log(typeof fs);

// fs.writeFile(`./days-of-the-week.js`, `Hello!`, function () {});
// const daysOfWeek = require("./dayOfTheWeek");npm

let players = ["Kobe", "Lebron", "Jordan", "Yao"];
let days = ["mon", "tus", "wed", "thr", "fri", "sat", "sun"];

players.map((player) => {
  fs.writeFile(`./${player}.txt`, `${player} is in HOF`, function () {
    console.log("File creation complete");
  });
});

console.log(module);
