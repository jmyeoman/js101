// Problem
// Given a number return a number that is the next higher number
// that meets the following criteria:
// 1. Is a multiple of 7
// 2. Is not even
// 3. Does not have two digits that are the same
// 4. Is not higher than 9876543201
// Input: Number
// Output: Number
// Data Structure: Array
// Algorithm
// Make helper function for is multiple of 7
// Make helper function for is odd
// Make helper function for does not have two digits the same
// a. Turn number into array of string chars
// b. Iterate over array
// c. Check if the char occurs twice
// Make guard clause that checks if number is too high.
// Create loop that starts adding to the given number
// on each loop check if all criteria are met
// once they are all met return that number

function mult7(num) {
  return num % 7 === 0;
}

function isOdd(num) {
  return num % 2 === 1
}

/*
function noDigitsTwice(num) {
  let numStrArr = String(num).split('')
  
  for (let i = 0; i < numStrArr.length; i++) {
    for ( let i2 = 0; i2 < numStrArr.length; i2++)
    if (numStrArr[i] === numStrArr[i2] && i !== i2) {
      return false
    }
  }
  return true
}
*/

function noDigitsTwice(num) {
  let strArr = String(num).split('')
  
  return !(strArr.some(char => strArr.indexOf(char) !== strArr.lastIndexOf(char)))
                    
}


  
function isNotFeatured(num) {
  return !(isOdd(num) && mult7(num) && noDigitsTwice(num))
}


function featured(num) {
  if (num >= 9876543201) {
    return 'There is no possible number that fulfills those requiremnets.'
  }
  
  do {
    num += 1
  } while (isNotFeatured(num))
  
  return num
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
console.log(isNotFeatured(21))
console.log(isNotFeatured(36))
console.log(isNotFeatured(1029))
console.log(isNotFeatured(1033))
*/