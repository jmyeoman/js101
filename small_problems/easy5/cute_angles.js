// Input: A floating point number
// Output: A string
// Rules
// Explicit:
// 1. Return a string that takes the floating point number and converts it to
// degrees, minutes, and seconds
// Implicit:
// 1. All angles that are larger than 360 should return the angle for the remainder of the number using 360 as the divisor360
// 2. Set 0 equal to zero, but set 360 equal to 0 and 360 with a guard clause
//
// For a given floating point number
// Convert number to a string then to an array then back to a number
// Set an empty string to result
//
// Process:
// Set angle equal to remainder of given number with divisor 360
// create guard clause that reurns 0 and 360 for 360
// Add non-floating point numbers to result string
// IF non-floating point number less than 2 digits prepend a zero to it
// Add degree symbol to result string
// get rid of non-floating point number
// Multiply remaining floating point number by 60
// Add non floating point numbers to result string with prepended 0 if necessary
// Add single quote to result string
// Get rid of non-floating point number and multiply floating point by 60
// Add non-floating point number to string
// Add double quote to string
// return string
//
// Problem: Numbers need to be 2 digits and some results will be one digit
// Solution: If length (must be string) is one add 0 to string first.

// charcode for degree 0x00B0


function processDegrees(num) {
  let result 
  let degrees
  let minutes
  let seconds
  degrees = String(Math.floor(num))
  num = (num - Math.floor(num)) * 60
  if (String(Math.floor(num)).length < 2) {
    minutes = '0' + String(Math.floor(num))
  } else {
    minutes = String(Math.floor(num))
  }
  num = (num - Math.floor(num)) * 60
  if (String(Math.floor(num)).length < 2) {
    seconds = '0' + String(Math.floor(num))
  } else {
    seconds = String(Math.floor(num))
  }
  
  result = degrees + String.fromCharCode(0x00B0) + minutes + "'" + seconds + '"'
  return result
}

function isNegative(num) {
  if (num < 0) {
   return 360 + (num % 360)
  }   else {
    return num % 360
  }
}

function dms(number) {
  if (number === 360) {
    return '360°00\'00" or 0°00\'00"'
  } else {
    number = isNegative(number)
    return processDegrees(number)
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"