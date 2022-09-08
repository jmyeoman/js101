// Problem
// Given a number one by one rotate the the first then second
// then third number to the end of the number continuing
// until you can go no further. 
// Rules:
// 1. it's okay for a leading zero to get dropped
// Input: Number
// Output: Number
// Data Structure: Array
// Algorithm
// 1. Create a loop 
// 2. Set the maximum of the loop to gretater than one
// 3. initialize the loop at the length of 
// of the passed number converted to a string
// On each loop run the rightMost Digits function on the
// number. 
// return the new number


function maxRotation(num) {
  let count = String(num).length;
  
  while (count > 1) {
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }
  return num;
}

function rotateRightmostDigits(num, count) {
  let numArr = String(num).split('');
  let digit = numArr.splice(-(count), 1)[0];
  numArr.push(digit);
  return Number(numArr.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
