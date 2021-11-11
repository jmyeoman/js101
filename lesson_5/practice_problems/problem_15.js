// Problem
// Given an a data structure return an array that only returns 
// an object if it where all numbers are even
// Input: array of objects containing arrays of numbers
// Output the same type of data structure (don't mutate)
// 1. Don't mutate
// 2. Only even numbers
// Data Structure
// Same type as input with no transformations between
// Algorithm
// 1. Transform the array and select each element that meets criteria (filter)
// 2. retrieve keys of element in array
// 3. Create empty object to hold values
// 4. Loop through the keys
//      Loop through through the value 
//      If every value is even assign the value to the new key
//      return object
// 5. return array
// helper two everys on value array



let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function evensOnly(arr) {
  return arr.filter(obj => isEven(obj));
}

function isEven(obj) {
  let values = Object.values(obj);
  return values.every(arr => arr.every(num => num % 2 === 0));
}



console.log(evensOnly(arr))