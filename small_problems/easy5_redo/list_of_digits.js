// Problem
// Given an integer return a list of each individual digit
// Input: Number
// Output: Array
// Data Structure: Array
// Algorithm
// 1. Convert number to string
// 2. Split string into array of individual digit strings
// 3. Iterate over array and transform the strings back to numbers
// 4. Return the array

function digitList(num) {
  return String(num).split('')
                    .map(digit => Number(digit))
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]