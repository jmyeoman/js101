// Problem
// Create a function that returns the multiple of each possible pair
// in two arrays. Have them in ascending order
// Input: Two Arrays
// Output: One Array
// Data Structure: Arrays
// Algorithm
// START
// Create a result empty array
// iterate over one array
// during each iteration iterate over the other array muliplying the
// current values from each array and pushing the result to the result
// array
// Sort the result array and return it
// END

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });
  
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]