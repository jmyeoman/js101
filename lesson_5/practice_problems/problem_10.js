// Problem
// Given an array of subarrays with numbers and strings return 
// a new array with the contents of the subarrays in descending 
// order
// Rules:
// 1. Don't mutate original array
// 2. Case insensitive
// 3. Includes negative numbers
// Input: An array of subarrays filled with numbers or strings
// Output: the same
// Data Structure
// array of numbers and strings
// Algorithm
// 1. loop through array
// 2. if the first element of the subarray is a number
//    return a copy of the subarray sorted in descending order
// 3. if the first element is a string
//    return a copy of the subarray sorted  in descending order
// 4. return transformed array


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortDescending(arr) {
  return arr.map(subArr => {
    if (typeof subArr[0] === 'string') {
      return subArr.slice().sort().reverse();
    } else {
      return subArr.slice().sort((a, b) => b - a);
    }
  });
}

console.log(sortDescending(arr))