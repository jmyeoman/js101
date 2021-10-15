
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

function signedIntegerToString(integer) {
  if (Math.sign(integer) === -1) {
    return '-' + integerToString(-integer)
  } else if (Math.sign(integer) === 1) {
    return '+' + integerToString(integer)
  } else {
    return integerToString(integer)
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");