// Problem
// Given two arrays create a new array with all elements from both lists
// alternating back and forth
// Input: Arrays
// Output: Array
// Data Structure: Array
// Algorithm
// Create a new empty result array
// iterate over both arrays with a for loop
// push an element from each array to the new array on each 
// iteration
// Return result array

/*
let interleave = function(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i], arr2[i]);
  }
  
  return resultArr;
}
*/

/*
let interleave = function(arr1, arr2) {
  let resultArr = [];
  
  arr1.forEach((element, index) => {
    resultArr.push(element, arr2[index])
  });
  
  return resultArr;
}
*/

let interleave = (arr1, arr2) => {
  return arr1.reduce((acc, cv, index) => {
    acc.push(cv, arr2[index]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]