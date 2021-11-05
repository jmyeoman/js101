// P
// given a non-empty string return the single middle character
//   if the string length is odd or the two middle characters
//   if the string length is even.
// Input: String
// Output: String
// Rules:
// 1. Don't have to worry about empty string
// 2. Case insensitive
// 3. return single middle character if length is odd
// 4. return two middle characters if length is even
//
// Data Structure
// String to array and then back to String
// 
// Algorythm
// Set result string = to ''
// Convert string to array
// Loop over array
// If the array length is odd select the middle character and add
//   it to the result string
// Else if the array length is even select the middle two characters
//   and return them to the result string
// Return result string
//
// Helper function for selection
//   if array length remainder 2 equals 0 then select the middle two character
//   if the array length remainder 2 is 1 then select the middle character


function centerOf(str) {
  let resultArr= []
  let arrayStr = str.split('')
  if (arrayStr.length % 2 === 0) {
      resultArr.push(arrayStr[(arrayStr.length / 2) -1])
      resultArr.push(arrayStr[arrayStr.length / 2])
    } else {
      resultArr.push(arrayStr[Math.floor(arrayStr.length / 2)])
    }
  return resultArr.join('')
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"