// Problem
// Write a function that takes a year and returns the century
// Input: number
// Output: String
// Data Structure: Object
// Algorithm:
// Create an object with the possible endings matching the year
// Take the number and find the remainder of 100 (label ending)
// Take the number and find the division of 100 (floor) (century) and then
// take the remainder 100 (partial century)
// if ending  !== 0 
//   add 1 to century
// return century + Object.partialCentury
// 

function century(year) {
  let lastTwodigits = year % 100;
  let firstDigits = Math.floor(year / 100);
  let endingOneDigit = firstDigits % 10;
  let endingTwoDigits = firstDigits % 100
  let lastTwoDigits = year % 100;
  let ending;
  
  if (lastTwoDigits > 0) {
    firstDigits += 1;
    endingOneDigit += 1;
    endingTwoDigits += 1
  }
  
  if (endingTwoDigits > 10 && endingTwoDigits < 14) {
    ending = 'th';
  } else if (endingOneDigit === 1) {
    ending = 'st';
  } else if (endingOneDigit === 2) {
    ending = 'nd';
  } else if (endingOneDigit === 3) {
    ending = 'rd';
  } else {
    ending = 'th';
  }
  
  return String(firstDigits) + ending;
}
                
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"