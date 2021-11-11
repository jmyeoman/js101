// Problem
// Given an array of subarrays return a copy of the array but only
// with numbers that are multiples of 3
// Rules:
// 1. Only return numbers that are multiples of 3
// 2. Return same data structure including empty arrays if necessary
// Input: Array of subarrays containing numbers
// Output: the same type of structure
// Data Structure
// Array of subarrays containing numbers
// Algorithm
// loop over the array (Map)
// For each subarray select the elements that are multiples of
// 3 
// return transformed array

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let transformedArr = arr.map(subArr => {
  return subArr.filter( num => num % 3 === 0)
})

console.log(transformedArr)