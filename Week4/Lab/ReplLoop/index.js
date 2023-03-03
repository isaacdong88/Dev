for (let i = 99; i > 0; i--) {
  console.log(`${i} bottles of coke on the wall, ${i} bottles of coke.
  Take one down and pass it around, ${i - 1} bottles of coke on the wall.`);
}

num1 = 3;

while (num1 < 35) {
  console.log(num1);
  num1 += 3;
}

num1 = 5;

while (num1 < 100) {
  console.log(num1);
  num1 += 5;
}

num1 = 0;

while (num1 <= 20) {
  if (num1 % 2 === 0) {
    console.log(num1 * 3);
  }
  num1 += 1;
}

num1 = 0;

while (num1 <= 20) {
  if (num1 === 2) {
    console.log(num1);
  } else if (num1 % 2 !== 0) {
    console.log(num1);
  }
  num1 += 1;
}
