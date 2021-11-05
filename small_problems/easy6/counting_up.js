// P
// Given a number return an array of every integer from one to 
//   the argument in ascending order
// Input: Number
// Output: Array
// Rules: argument will always be a positive number
// Data Structure:
// Number to array
// Algorthym
// -set a result array as empty
// create a loop
//   the counter should be set to one
//   The loop limit should be set to less than or equal to the arg
//   for each loop push the counter number to the array
//   increment the counter
// return the result array

function sequence(integer) {
  let resultArr = []
  for (let count = 1; count <= integer; count++ ) {
    resultArr.push(count)
  }
  return resultArr
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]