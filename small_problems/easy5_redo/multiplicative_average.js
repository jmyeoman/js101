// Problem
// Given an array of integers return a number that represents the 
// integers multiplied by each other and then divided by the number
// of elements. The result should be rounded to 3 decimal places
// and be a string
// Input: Array of Numbers
// Output: String
// Datastructure: array
// Algorithm
// 1. Iterate over the array and multiply the integers by eachother
// 2. Divide the resulting number by the length of the array
// 3. Coerce the resulting number to a string with 3 decimal places.\

function multiplicativeAverage(arr) {
  let result = arr.reduce((acc, cv) => acc * cv)
  result /= arr.length
  result = result.toFixed(3)
  return result
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"