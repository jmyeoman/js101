// P
// Given a positive integer reverse the number's digits
// Input: Number
// Output: Number
// Data Structure
// number to string to array back to string and then number
// Algorythm
// Convert number to string
// Convert string to array
// Reverse array
// convert array to string 
// convert string to number
// return number

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''))
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1