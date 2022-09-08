// Problem
// Given a string capitalize every letter starting with the first letter
// Rules
// 1. Pattern runs over spaces and non-alphabetic characters without
// changing them
// Input: String
// Output: String
// Data structure: Array
// Algorithm
// Start
// Convert string to an array of characters
// iterate over characters
// Starting with the first character alternate between capitalizing
// and putting in lowercase each character
//     do this by checking the index remainder 2
//     if that equals 0 capitalize
//     else lowercase
// join array back into string
// return modified string

function staggeredCase(str) {
  return str
         .split('')
         .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
         .join('')
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"