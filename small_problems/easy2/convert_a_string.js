/* incorrect solution
function stringToInteger(string) {
  let arr = Array.from(string)
  let convertedArr
  for (let i = 0; i < arr.length; i++) {
    for (let num = 0; num < 10; num++) {
      if (arr[i] == num) {
        convertedArr.push(num);
      }
    }
  }
  convertedArr = convertedArr.join()
}

function stringToInteger(string) {
  return string * 1;
}*/

// correct solution
/*
function stringToInteger(string) {
  const nums = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrOfNums = string.split('').map(char => nums[char]);
  let value = 0;
  arrOfNums.forEach(element =>  value = ((value * 10) + element));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true */

function hexadecimalToInteger(string) {
  const nums = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15,
  };
  let arrOfNums = string.split('').map(char => nums[char]);
  let value = 0;
  arrOfNums.forEach(element =>  value = ((value * 16) + element));
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);