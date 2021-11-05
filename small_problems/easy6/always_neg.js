// P
// Given a number return the number as a negative number if it's positive
//   and return the number as-is if it's a negative number
// Input: Number
// Output: Number
// Data Structure
// stays a number
// Algorythm
//   Given number if number 0 or greater return number times -1
//   else if number is less than 0 return number

function negative(num) {
  return num >= 0 ? num * -1 : num
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0