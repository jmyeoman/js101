// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
 console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

// input: array
// output: numbers
// algo:
// - if arr length is less than 5 return null
// - create constant subtracter and initialize to -3
// - create sums variable and initialize to empty array
// - iterate over array starting at 0 and going to array length - 3
// - pass the sum of the current 5 elements to the sum variable
// - end loop
// - return minimum number in sums array

function minimumSum(arr) {
  if (arr.length < 5) return null;
  const lastBeginningIndex = arr.length - 5
  let sums = [];

  for (let i = 0; i <= lastBeginningIndex; i++) {
    let sum = arr.slice(i, i + 5).reduce((total, num) => total + num)
    sums.push(sum);
  }
  return Math.min(...sums);
}
// -
// - 