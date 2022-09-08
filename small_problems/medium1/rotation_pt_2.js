// Problem
// Given a number and a count rotate the number in the position
// of the count from the right to the end of the number
// Rules: ?
// Input: Number
// Output: Number
// Data Structure: Array
// Algorithm
// 1. convert the number to a string and then to an array
// 2. Remove the digit counted from the right
// 3. place the removed digit at the end
// 4. Convert the array to a string and back to a number
// 5. return the number

function rotateRightmostDigits(num, count) {
  let numArr = String(num).split('');
  let digit = numArr.splice(-(count), 1)[0];
  numArr.push(digit);
  return Number(numArr.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917