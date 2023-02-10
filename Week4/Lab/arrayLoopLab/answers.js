// Part II HTML and CSS

// I rank my knowledge at 4, feeling pretty comfortable



// Part II  Javascript Rep

// Easy Going
for(let i=1;i<=20;i++) {
    console.log(i)
}
// Easy Going answered


// Get Even
for(let i=0;i<=200;i+=2) {
    if(i===0) {

    } else{
        console.log(i)
    }
}
// Get even answered

// Fizz Buzz
for(let i=1;i<=100;i++) {
    if(i%3===0 && i%5===0){
        console.log(`FizzBuzz, ${i}`)
    } else if(i%3===0) {
        console.log(`Fizz, ${i}`)
    } else if(i%5===0){
        console.log(`Buzz, ${i}`)
    } else {
        console.log(i)
    }
} 

// Fizz Bizz answered


// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Q1
plantee[2] = 5001
console.log(plantee)

// Q2
wolfy[wolfy.length-1] = "Gotham City"
console.log(wolfy)

// Q3
dart.push("Hawkins")
console.log(dart)

// Q4
wolfy.splice(0,1,"Gameboy")
console.log(wolfy)

// Wild Wild Life answered


// Yell at the Ninja Turtles
const turtle = ['Donatello','Leonardo','Raphael','Michaelangelo']

for(ninja of turtle) {
    console.log(ninja.toUpperCase())
}

// Yell at the Ninja Turtles answered

// Methods Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'))

// Q1
console.log(favMovies.sort())
console.log(favMovies)
// Sort() puts the array in alphanumeric order and it permanently altered the array

// Q2
favMovies.pop()
console.log(favMovies)
//Pop removes that last item in the array

// Q3
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
// Push adds to the end of an array

// Q4
favMovies.reverse()
console.log(favMovies)
// Reverse also altered the array


// Q5
favMovies.shift()
console.log(favMovies)
//Shift removes the first element in an array

// Q6
console.log(favMovies.unshift())
// Unshift adds to the beginning of an array and returns the new length


// Q7
console.log(favMovies.splice(favMovies.indexOf('Django Unchained'),1,"Avatar"))
console.log(favMovies)
//Yes it did alter our array

// Q8
console.log(favMovies.length)
console.log(favMovies.slice(favMovies.length/2))
//This did not alter the array just produced a substring

//Q9
let newFav = console.log(favMovies.slice(Math.floor(favMovies.length/2)))
console.log(newFav)
//This is a substring of the original favMovies array

//Q10
console.log(favMovies)

//Q11
console.log(favMovies.indexOf("Fast and Furious"))
favMovies.splice(13,1)
console.log(favMovies.indexOf("Fast and Furious"))
//You get -1 if the value is not in the array

//Q12
//We are not changing the reference in memory of the array
//so const still works we can't assign another array to favMovies unless we use let

//Methods revisited answered


//Where is Waldo
const whereIsWaldo = [
    ["Timmy", "Frank"], "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
]

whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)

console.log(whereIsWaldo[2][1][1])

//Where is Waldo answered


//Excited Kitten
let catSpeak = ["...human..why you taking pictures of me?..","..the catnip made me do it..","why does the red dot always get away"]

for(let i=1;i<=20;i++) {
    if(i%2===0) {
        console.log(catSpeak[Math.floor(Math.random()*catSpeak.length)])
    } else {
        console.log("Love me, pet me! HSSSS!")
    }
}

//Excited Kittens answered


//Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.length)
nums.sort()

if (nums.length%2!==0) {
    console.log(nums[Math.floor(nums.length/2)])
} else {
    let median = (nums[nums.length/2]+nums[(nums.length/2)-1])/2
    console.log(median)
}

//Find the median answered


//Return of the Closets

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

  //Alien Attire
let kristynsShoe = kristynsCloset[0]
kristynsCloset.shift()

thomsCloset[2].push(kristynsShoe)
console.log(thomsCloset)

//Dress Us Up
console.log(`Kristyn is wearing ${kristynsCloset[0]},${kristynsCloset[3]} and ${kristynsCloset[5]}.`)
console.log(`Kristyn is wearing ${kristynsCloset[1]},${kristynsCloset[2]} and ${kristynsCloset[4]}.`)
console.log(`Kristyn is wearing ${kristynsCloset[2]},${kristynsCloset[3]} and ${kristynsCloset[5]}.`)

console.log(`Thomas is wearing ${thomsCloset[0][1]},${thomsCloset[1][2]} and ${thomsCloset[2][0]}`)
console.log(`Thomas is wearing ${thomsCloset[0][2]},${thomsCloset[1][1]} and ${thomsCloset[2][1]}`)
console.log(`Thomas is wearing ${thomsCloset[0][3]},${thomsCloset[1][0]} and ${thomsCloset[2][2]}`)

//Kristyn and Thom have their outfits ready for class - practice array



//Dirty Laundry
for(dirty of kristynsCloset) {
    console.log(`Whirr: Now washing ${dirty}`)
}


//Inventory
console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])

//Hungry for More: I tackled
