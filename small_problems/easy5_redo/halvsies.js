// Problem
// Given an array split the array in half and put them in two seperate arrays
// within an array
// Rules: If there are an odd number of elements put the middle in
// the first half
// Input: Array
// Output: Array
// Data Structure: Array
// Algorithm:
// Create a result array
// Take the first half and put it in the first array
// Take the second half and put it in the second array
// return the result array

function halvsies(arr) {
  let resultArr = []
  let firstHalf = arr.slice(0, Math.ceil(arr.length / 2))
  let secondHalf = arr.slice(Math.ceil(arr.length / 2))
  resultArr[0] = firstHalf
  resultArr[1] = secondHalf
  return resultArr
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]