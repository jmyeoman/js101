/*
Pseudocode:
START
GET number
WHILE index < number length
SET each number in an array 
SET each number string in array
Join number strings

Get remainder of each place
int % 10 

*/

function integerToString(integer) {
  const DIGITS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };
  let arr = [];
  let savedNum = 0
  
  do {
    savedNum = integer % 10;
    arr.push(savedNum);
    integer = ((integer - savedNum) / 10);
  } while (integer > 0)
  
  let reversed = arr.reverse()
  let mapped = reversed.map(element => DIGITS[element])
  let string = mapped.join('');
  return string;
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"