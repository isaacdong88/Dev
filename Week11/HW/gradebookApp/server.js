const express = require("express");
const app = express();
const PORT = 3000;
const students = require("./models/students");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.render("Homepage", { students: students });
});

app.get("/students/:indexStudent", (req, res) => {
  res.render("StudentIndex", {
    student: students[req.params.indexStudent],
    studentIndex: req.params.indexStudent,
  });
});

//Post Route
app.post("/", (req, res) => {
  if (req.body.name !== "" && req.body.img !== "") {
    students.push(req.body);
  }
  res.redirect("/");
});

app.post("/students/:indexStudent", (req, res) => {
  //   console.log(req.params.indexStudent);
  //   students[req.params.indexStudent].grades.math.homeworks.push({
  //     lesson: req.body.lesson,
  //     score: req.body.score,
  //   });
  if (students[req.params.indexStudent]["grades"] === undefined) {
    students[req.params.indexStudent]["grades"] = {
      math: { homeworks: [], tests: [] },
      reading: { homeworks: [], tests: [] },
    };
  }
  if (
    req.body.subject === "math" &&
    req.body.type === "homeworks" &&
    req.body.lesson !== "" &&
    req.body.score !== ""
  ) {
    students[req.params.indexStudent].grades.math.homeworks.push({
      lesson: req.body.lesson,
      score: req.body.score,
    });
  } else if (
    req.body.subject === "math" &&
    req.body.type === "tests" &&
    req.body.lesson !== "" &&
    req.body.score !== ""
  ) {
    students[req.params.indexStudent].grades.math.tests.push({
      test: req.body.lesson,
      score: req.body.score,
    });
  } else if (
    req.body.subject === "reading" &&
    req.body.type === "homeworks" &&
    req.body.lesson !== "" &&
    req.body.score !== ""
  ) {
    students[req.params.indexStudent].grades.reading.homeworks.push({
      lesson: req.body.lesson,
      score: req.body.score,
    });
  } else if (
    req.body.subject === "reading" &&
    req.body.type === "tests" &&
    req.body.lesson !== "" &&
    req.body.score !== ""
  ) {
    students[req.params.indexStudent].grades.reading.tests.push({
      test: req.body.lesson,
      score: req.body.score,
    });
  }

  res.redirect(`/students/${req.params.indexStudent}`);
});

//Server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
