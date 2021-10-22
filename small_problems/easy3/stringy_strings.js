function stringy(integer) {
  let string = '';
  while (integer > 0) {
    if (string[string.length - 1] !== '1') {
      string = string + '1';
    } else {
      string = string + '0';
    }
    integer -= 1;
  }
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"