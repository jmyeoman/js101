// P
// Given a string double ach letter in the string
// rules: 
// 1. case insensitive
// 2. empty string returns an empty string
// 3. all characters are doubled not just letters
// 
// input: string
// output: string
// 
// Data Structure
// convert string to array and then back to string
//
// Algorythm
// convert string to array
// loop through the array
// for each element return element concatenated to element once
// convert array back to string
// return string

function repeater(str) {
  return str.split('').map(element => element + element).join('')
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""