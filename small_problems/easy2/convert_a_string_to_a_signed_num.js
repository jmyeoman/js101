function stringToSignedInteger(string) {
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
    '-': '-',
    '+': '+',
  };
  let arrOfNums = string.split('').map(char => nums[char]);
  let value = 0;
  if (arrOfNums[0] === '-') {
    arrOfNums.shift()
    arrOfNums.forEach(element => value = ((value * 10) + element));
    return (value * -1);
  } else if (arrOfNums[0] === '+') {
    arrOfNums.shift()
    arrOfNums.forEach(element => value = ((value * 10) + element));
    return value;
  } else {
    arrOfNums.forEach(element => value = ((value * 10) + element));
    return value;
  }
}




console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true