// Problem
// Given to arrays containing a list of numbers return a new array
// that contains the product of each number multiplied by the other
// number with the same index number
// Input: Two Arrays of numbers
// Output: Array
// Data Structure: Array

// Algorithm
// Iterate over one array
// On each iteration multiply the number by the number of the other
// array at the same index
// Return the resulting array

function multiplyList(arr1, arr2) {
  return arr1.map((__, index) => arr1[index] * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])