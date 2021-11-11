// Problem
// Given an array of subarrays sort the subarrays by the sum of
// the odd numbers they contain
// Rules: 
// 1. mutating the original array. 
// Input:
// An array of subarrays containing numbers
// Output:
// the same array
// Datastructure:
// An array of subarrays
// Algorithm
// 1. Sort the array by odd numbers added

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => addOdds(a) - addOdds(b))

function addOdds(arr) {
  return arr.reduce((acc, cv) => {
    if (cv % 2 === 1) {
      return acc + cv
    } else {
      return acc
    }
  }, 0)
}

console.log(arr)

