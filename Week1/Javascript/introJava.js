// What is a Data type
// string: string of characters that make up some form of text
// Integers: real numbers/whole num
// Boolean: values that equate to either True or False *
//      truthy, falsely
// Arrays: any grouped set of values indicated by using []
// Objects: grouped set of attributes and values {keyvalue pair}

// Conditionals: base on certain condition is true something happens

// = is assignment of value variable equal
// == is loosely equal like string 3 equals integer 3
// === is strict comparision so string 3 will not equal integer 3

let str1 = "Hello";
let str2 = "World";
let newstr = str1.concat(" ", str2)

console.log(str1.concat(" ", str2));
console.log(newstr)

console.log(newstr.repeat(2))
console.log(newstr.indexOf("World"))