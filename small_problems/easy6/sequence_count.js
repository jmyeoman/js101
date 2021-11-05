// P
// - Given two numbers (a count and a number to multiply) create
// create an array with all multiples of the number starting with
// one and ending with the count number
// Input: 2 numbers
// Output: an Array of Numbers
// Rules:
// 1. 0 must return an empty array (guard clause or automatic)
// 2. There are nu negative counts. 
// 3. There can be negative multiples
// 4. There can be 0s as multiples
//
// Data Structure
// Create an array and add numbers to it.
//
// Algorithm
//
// 1. Set a result variable = to an empty array
// 2. create a loop
// 3. The number of loops should equal the count and start at 1
// 4. on each loop push the count times the multiple to the result
// 5. return result
// Guard clause for zero?
//

function sequence(countMax, multiple) {
  let result = [];
  let count = 1;
  
  while (count <= countMax) {
    result.push(multiple * count);
    count += 1;
  }
  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

