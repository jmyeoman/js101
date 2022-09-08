//Problem
// Given an array of numbers that replaces the elements with the
// running total of previous elements
// Input: Array
// Output Array
// Data Structure: Array
// Algorithm
// Create a result array
// Loop over the array elements 
// Create a total variable set to zero
// On each loop add the curren element to the total 
// push the total to the result array
/*
function runningTotal(arr) {
  let resultArr = [];
  let total = 0;
  arr.forEach(num => {
    total += num;
    resultArr.push(total);
  });
  
  return resultArr;
}
*/

function runningTotal(arr) {
  return arr.map((element, index, array) => {
    return array.slice(0, index + 1)
                .reduce((acc, cv) => {return acc + cv}, 0)
  })
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []