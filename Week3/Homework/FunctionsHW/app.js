// Problem 1: Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// const maxOfTwoNumbers = (x,y) => {
//     if (x >= y) {
//         return x
//     } else {
//         return y
//     }
// }

function maxOfTwoNumbers (x,y) {
    if (x >= y) {
        return x
    } else {
        return y
    }
}

// console.log(maxOfTwoNumbers(8,5))
// console.log(maxOfTwoNumbers(4,5))



// Problem 2: Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = (x,y,z) => {
    if (x >= y) {
        if (x >= z) {
            return x
        } else {
            return z
        }
    } else {
        if (y >= z) {
            return y
        } else {
            return z
        }
    }
}

// console.log(maxOfThree(10,3,2))
// console.log(maxOfThree(1,3,2))
// console.log(maxOfThree(1,3,5))
// console.log(maxOfThree(8,8,8))



// Problem 3: Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// const isCharAVowel = (char) => {
//     let vowel = ['a','e','i','o','u']
//     if (vowel.includes(char.toLowerCase())) {
//         return true
//     } else {
//         return false
//     }
// }

function isCharAVowel (char) {
    let vowel = ['a','e','i','o','u']
    if (vowel.includes(char.toLowerCase())) {
        return true
    } else {
        return false
    }
}

// console.log(isCharAVowel('a'))
// console.log(isCharAVowel('A'))
// console.log(isCharAVowel('i'))
// console.log(isCharAVowel('U'))
// console.log(isCharAVowel('b'))
// console.log(isCharAVowel('P'))



// Problem 4: Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.


const sumArray = (arr) => {
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(sumArray([1,2,3]))
// console.log(sumArray([10,2,3]))
// console.log(sumArray([10,10,20,30]))
// console.log(sumArray([1]))




// Problem 5: Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// const multiplyArray = (arr) => {
//     let product = 1;
//     for (let i=0; i<arr.length; i++) {
//         product *= arr[i]
//     }
//     return product
// }

function multiplyArray (arr) {
    let product = 1;
    for (let i=0; i<arr.length; i++) {
        product *= arr[i]
    }
    return product
}

// console.log(multiplyArray([1,2,3]))
// console.log(multiplyArray([2,4,5]))
// console.log(multiplyArray([1,1,1,2,4]))
// console.log(multiplyArray([1,2,3,0]))



// Problem 6: Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// function numArgs() {
//     return arguments.length
// }

const numArgs = (...args) => {
    return args.length
}

// console.log(numArgs(2,3,5))
// console.log(numArgs(2,'1','b',3))
// console.log(numArgs(2,3,[2,3],1))



// Problem 7: Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString (str) {
    newStr = ""
    for (let i=str.length-1; i>=0; i-- ) {
        newStr += str[i]
    }
    return newStr
}

// console.log(reverseString('Peels'))
// console.log(reverseString('Pots'))
// console.log(reverseString('Rats'))
// console.log(reverseString('Tops'))




// Problem 8: Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = (arr) => {
    let longestStr = 0
    for (let i=0; i<arr.length;i++) {
        if (arr[i].length > longestStr) {
            longestStr = arr[i].length
        }    
    }
    return longestStr
}

// console.log(longestStringInArray(['happy','long','elephant']))
// console.log(longestStringInArray(['happy','long','ate']))



// Problem 9: Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan (arr,num) {
    longStr = []
    for (let i=0; i<arr.length;i++) {
        if (arr[i].length > num) {
            longStr.push(arr[i])
        }
    }
    return longStr
}

// console.log(stringsLongerThan(['happy','sad','four','ate'],3))
// console.log(stringsLongerThan(['happy','sad','four','ate'],4))