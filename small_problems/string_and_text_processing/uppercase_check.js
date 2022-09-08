// Problem
// Given a string return a boolean result regarding whether or not 
// all alphabetic characters are uppercase
// Rules:
// Ignore non-alphabetic characters
// Input: string
// Output: Boolean
// Data-structure: Array
// Algorithm
// Convert string to array of single characters
// iterate over array
// check if each character is equal to itself if put in uppercase
// return boolean result of check

function isUppercase(str) {
  return str.split('')
            .every(char => char === char.toUpperCase())
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true