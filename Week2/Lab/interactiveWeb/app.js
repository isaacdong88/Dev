
// Alert & Prompt


// Variables

let introduction = "Welcome To My Site"

let username = "PerSchola"

let location1 = "New York"

let date = "Jan. 27, 2023"

const students = ["Dana", "DJ", "Deja", "Divna"]
console.log(introduction)

let favDav = {
    day: "Friday",
    weather: "Sunny",
    activity: "Art Museum",
    homework: false,
    timeClassEnds: 4
}


// Conditionals

// Functions

const introSite = () => {
    let guessAge = prompt("Are you 18 and over?")

    if(guessAge === "yes") {
        let mainBox = document.querySelector('.container')
        mainBox.innerHTML = introduction
    } else {
        let ourPage = document.querySelector('body')
        ourPage.style.backgroundColor = 'red'
    }
}


// const displayStudents = () => {
//     for (i=0; students.length;i++){
//         let mainBox = document.querySelector('.container')
//         mainBox.append(students[i])
//     }

// }

// querySelectors

const displayStudents = () => {
    for (i = 0; i < students.length; i++) {
        // 1. Create Element
        let studentBubble = document.createElement('div')
        // 2.Assign Class 
        studentBubble.setAttribute('class', 'person')
        // 2a. Fill New Element with Info
        studentBubble.innerHTML = students[i]
        // 3. Append Item
        let mainBox = document.querySelector('.container')
        mainBox.append(studentBubble)

    }
}
