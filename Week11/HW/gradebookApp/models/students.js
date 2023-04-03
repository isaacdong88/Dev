const students = [
  {
    name: "Luke",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046372.png",
    grades: {
      math: {
        homeworks: [
          { lesson: "Math Homework 1", score: "98" },
          { lesson: "Math Homework 2", score: "100" },
        ],
        tests: [
          { test: "Math Test 1", score: "100" },
          { test: "Math Test 2", score: "90" },
        ],
      },
      reading: {
        homeworks: [
          { lesson: "Reading Homework 1", score: "95" },
          { lesson: "Reading Homework 2", score: "100" },
        ],
        tests: [
          { test: "Reading Test 1", score: "98" },
          { test: "Reading Test 2", score: "90" },
        ],
      },
    },
  },
  {
    name: "Sara",
    img: "https://cdn-icons-png.flaticon.com/512/7439/7439613.png",
    grades: {
      math: {
        homeworks: [
          { lesson: "Math Homework 1", score: "100" },
          { lesson: "Math Homework 2", score: "100" },
        ],
        tests: [
          { test: "Math Test 1", score: "100" },
          { test: "Math Test 2", score: "95" },
        ],
      },
      reading: {
        homeworks: [
          { lesson: "Reading Homework 1", score: "90" },
          { lesson: "Reading Homework 2", score: "96" },
        ],
        tests: [
          { test: "Reading Test 1", score: "98" },
          { test: "Reading Test 2", score: "89" },
        ],
      },
    },
  },
];

// console.log(students[0].grades.math.tests[0]);
// students[2] = { name: "Ken" };
// students[2]["grades"] = [98];
// console.log(students[2]);
// if (students[2]["grades"] === undefined) {
//   console.log("add grades");
// } else {
//   console.log("push grades");
// }

module.exports = students;
