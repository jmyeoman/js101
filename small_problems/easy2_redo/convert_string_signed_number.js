function stringToSignedInteger(str) {
    if (str[0] === '+') {
      return stringToInteger(str.slice(1))
    } else if (str[0] === '-') {
      return -stringToInteger(str.slice(1))
    } else {
      return stringToInteger(str)
    }
}

function stringToInteger(str) {
  let digits = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
  return str.split('')
            .reduce((acc, cv) => { return (acc * 10) + digits[cv]}, 0)
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true