// I. Variables & Datatypes

// Sect I.A
// Q1. To assign a value to a variable you will use the '=' assignment operator
let assignment = 'value'

// Q2. For a variable to change value it will first need to be declared using the 'let' key word instead of 'const'. Then to change the value just type variable name and set it equal to another value
assignment = 'changed'

// Q3. Create the new variable and set it equal to the existing variable name
let food = "apple"
let fruit = food

// Q4. Declare is creating a variable. Assign is giving value to a variable. Define is 
// declare uses keyword to establish
// assign uses = operator to associate value
// define is recalling value

// Q5. Psuedo coding is writing down the logic of the code in plain English. It will help you later on when writing code and organization

// Q6. You should spend about 60% time thinking how to code and 40% of time writing the code.

// Sect I.B Strings

// Q1.
let firstVariable = ''

// Q2.
firstVariable = 'Hello World'

// Q3
firstVariable = 1

// Q4
let secondVariable = firstVariable

// Q5.
secondVariable = "It's fun!"

// Q6. firstVariable is still equal to '1' 

// Q7.
let yourName = 'Isaac Dong'
console.log(`Hello, my name is ${yourName}`)

// Sec I.C Booleans

const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kevin'

console.log(a<b)
console.log(c>d)
console.log(e===e)
console.log(true || false)
console.log(false || false || false || false || false || true)
console.log(false === false)
console.log(e==='Kevin')
console.log(a+b===c)
console.log(a*a === d)
console.log(48 !== '48')


// Sec I.D The Farm

let animal = 'cow'
if (animal === 'cow') {
    console.log('moooo')
} else {
    console.log(`Hey! You're not a ${animal}.`)
}

// Sec I.E Driver's Ed

let personAge = 18
if (personAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young")
}


// Sec II Loops

// Sec II.A   The Basics

// Q1
for(let i=0;i<=10;i++) {
    console.log(i)
}

// Q2
for(let i=10;i<=100;i++) {
    console.log(i)
}

// Q3
for(let i=12;i<=100;i+=3) {
    console.log(i)
}

// Sec II.B Get Even

// Q1
for(let i=1;i<=100;i++) {
    console.log(i)
}

// Q2

for(let i=1;i<=100;i++) {
    if (i%2===0) {
        console.log(`${i} is an even number`)
    } else {
        console.log(i)
    }
}

// Sec II.C  Give me Five

// Q1
for(let i=1;i<=100;i++) {
    if (i%3===0 && i%5===0) {
        console.log(`I found a ${i}. High five! Three is a crowd`)
    } else {
        if (i%5===0) {
            console.log(`I found a ${i}. High five!`)
        } else if (i%3===0) {
            console.log(`I found a ${i}. Three is a crowd`)
        } else {
            console.log(`Your just a number ${i}`)
        }
    }
}


// Sec II.D  Savings Account

// Q1
let myBank = 0
let bonusBank = 0
for (let i=1;i<=10;i++) {
    myBank += i
}
console.log(myBank)


// Q2
for (let i=1;i<=100;i++) {
    bonusBank += i*2
}
console.log(bonusBank)


// Sec III Arrays and Control Flow

// III.A  Talk about it

// Q1. Things in an array is called indices
// Q2 Arrays is an ordered list
// Q3 Could have an array of the alphabet

// III.B
let quotes = ['Just Do It', 'Love the life you live','You only lige once']

// III.C

const randomThings = [1, 10, "Hello", true]

// Q1
console.log(randomThings[0])

// Q2
randomThings[2] = "World"
console.log(randomThings[2])

// Q3
console.log(randomThings)


// Sec III.D Change values

const ourClass = ["Salty","Zoom","Sardine","Slack","Github"]

// Q1
console.log(ourClass[2])

// Q2
ourClass[ourClass.length-1] = 'Octocat'

// Q3
ourClass.push('Cloud City')

console.log(ourClass)


// III.E  Mix it UP

// Q1
const myArray = [5,10,500,20]
myArray.push("Aegon")
myArray.push("Money")
console.log(myArray)

// Q2
myArray.shift(5)
console.log(myArray)

// Q3
myArray.unshift("Bob Marley")
console.log(myArray)

// Q4
myArray.pop()
console.log(myArray)

// Q5 Yes the array got mutated, changing the original array
console.log(myArray.reverse())
console.log(myArray)

// III.F  Biggie Smalls

// Q1 and Q2
let num = 10
if (num <100) {
    console.log('Little number')
} else {
    console.log('Big number')
}

// III.G  Monkey in the Middle

let monkeyNum = 15
if (monkeyNum < 5) {
    console.log("Little number")
} else if (monkeyNum > 10) {
    console.log("Big number")
} else {
    console.log('Monkey')
}

//  Sec III.H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Q1
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`)

//Q2

kristynsCloset.splice(6,0,'raybans')
console.log(kristynsCloset)

// Q3
kristynsCloset[5] = 'stained knit hat'
console.log(kristynsCloset)

// Q4
console.log(thomsCloset[0][0])

//Q5 
console.log(thomsCloset[1][0])

//Q6
console.log(thomsCloset[2][0])

// Q7
console.log(`Tom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`)

// Q8
thomsCloset[1][2] = 'Footie Pajamas'
console.log(thomsCloset)


// Sec IV   Functions

// Sec IV.A

// printGreeting

const printGreeting = (name) => {
    return `Hello there, ${name}!`
}

console.log(printGreeting('Isaac'))

// Sec IV.B printCool

const printCool = (name) => {
    return `${name} is cool!`
}

console.log(printCool('Isaac'))

// Sec IV.C calculateCube

const calculateCube = (num) => {
    return num**3
}
console.log(calculateCube(5))

// Sec IV.D isVowel

let vowel = ['a','e','i','o','u']
const isVowel = (str) => {
    if (vowel.includes(str.toLowerCase())) {
        return true
    } else {
        return false
    }
}

console.log(isVowel('D'))
console.log(isVowel('a'))
console.log(isVowel('E'))

// Sec IV E getTwoLengths

const getTwoLengths = (str1,str2) => {
    let strLength = []
    strLength.push(str1.length)
    strLength.push(str2.length)
    return strLength
}

console.log(getTwoLengths('Hank','Hippopopalous'))


//Sec IV F getMultipleLength

const getMultipleLength = (arr) => {
    let strsLength = []
    for(str of arr) {
        strsLength.push(str.length)
    }
    return strsLength
}

console.log(getMultipleLength(["hello", "what", "is", "up", "dude"]))


//Sec IV G maxOfThree

const maxOfThree = (x,y,z) => {
    if(x>=y) {
        if(x>=z) {
            return x
        } else {
            return z
        }
    } else {
        if(y>=z) {
            return y
        } else {
            return z
        }
    }
}

console.log(maxOfThree(10, 9, 110))


//Sec  IV H printLongestWord

const printLongestWord = (arr) => {
    let longestWord = ''
    for(str of arr){
        if(str.length > longestWord.length) {
            longestWord = str
        }
    }
    return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))


