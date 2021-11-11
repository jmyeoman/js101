// Problem
// Given a data structure return a new array with the same structure
// but with all the values (numbers and letters) ordered in
// ascending order
// Input: An array of subarrays
// Output a new array of subarrays
// Rules:
// 1. Everything must stay the same, but the order will change
// 2. keep Numbers and Strings straight
// Examples:
// must include negative numbers
// case insensitive
// Data Structure
// New array of subarrays
// Algorithm
// 1. Loop over array 
// 2. Sort subarray elements in ascending order
// 3. return array of subarrays

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortArr(arr) {
  let orderedArr = arr.map(subArr => {
    if (typeof subArr[0] === 'number') {
      return subArr.slice().sort((a, b) => a - b);
    } else {
      return subArr.slice().sort();
    }
  })
  return orderedArr;
}

console.log(sortArr(arr));