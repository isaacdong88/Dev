function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function compute(a, b, op) {
  return op(a, b);
}

let result1 = compute(15, 5, add);
let result2 = compute(13, 5, subtract);

console.log(result1);

//When the add and subtract functions are passed as arguments to the compute function - they are callback functions

// Here are three use-cases for callback functions:

// To provide a function to be called by a higher-order function such as forEach or the compute function we wrote above.

// To provide a function to be executed each time an event happens - just like with the addEventListener example above.

// To provide a function to be executed when an asynchronous process has completed.

const pets = ["dog", "cat", "bird"];

pets.forEach(function (pet, idx) {
  console.log(`${idx + 1}) ${pet}`);
});

//This function will be called 3 times

// What's an "asynchronous" method? It is when a function can run while another function might still be waiting for data and it won't cause a problem

const colors = ["red", "green", "blue"];

console.log("BEFORE the forEach...");

colors.forEach(function (color, idx) {
  console.log(`${idx + 1} - ${color}`);
});

console.log("AFTER the forEach...");

// Unlike the synchronous code we saw above, the code following an asynchronous function call continues to run before the async function finishes.

console.log("Code before the asynchronous function call");

setTimeout(function () {
  console.log("setTimeout code");
});

console.log("Code after the asynchronous function call");

// How does the browser know when an image has been retrieved and is ready to be painted? By implementing callbacks and something known as the eventloop

// JavaScript provides two ways to run a function after an asynchronous operation completes its long running process:

// Callbacks
// Promises

// Refactor to accept a callback function
// to be called when the data is ready
// function getFriendsAsync(cb) {
//   setTimeout(function () {
//     // pass the results to the provided callback
//     cb(["Fred", "Barney"]);
//   }, 0);
// }

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
// getFriendsAsync(function (friends) {
//   friends.forEach(function (friend) {
//     console.log(friend);
//   });
// });

// Functions that are asynchronous must be designed to either:

// Accept a callback function, or
// Return a promise

//Practice creating 5 callback functions

// #1
function multiply(a, b) {
  return a * b;
}

function product(a, b, cb) {
  return cb(a, b);
}

let answer = product(5, 5, multiply);
console.log(answer);

// #2
const players = ["Jordan", "Kobe", "Lebron", "Shaq"];
players.forEach((player) => {
  console.log(`${player} is a NBA player.`);
});

// #3
const cars = ["Maserati", "Mercedes", "Lamborgini", "Ferarri"];
cars.map((car) => {
  console.log(`${car} is a luxury car.`);
});

// #4
function getGrades(func) {
  setTimeout(function () {
    func(["100", "95"]);
  }, 0);
}

getGrades(function (grade) {
  grade.forEach(function (grade) {
    console.log(grade);
  });
});

// #5

const addGreeting = (name) => {
  console.log(`Good afternoon ${name}!`);
};

function customer(name, greeting) {
  return addGreeting(name);
}

customer("Isaac", addGreeting);

//Q1 Implicit returns means a function will return a value without the keyword return, because the arrow
// function already implies that a value it being return

// Q2 A callback function is a function that is being provoked in another higher-order function
