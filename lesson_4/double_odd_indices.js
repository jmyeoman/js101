function doubleOddIndices(numbers) {
  let transformedNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    if (i === 0) {
      transformedNumbers.push(currentNum)
      } else if (i % 2 === 1) {
      transformedNumbers.push(currentNum * 2);
    } else {
      transformedNumbers.push(currentNum);
    }
  }
  return transformedNumbers;
}


let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
myNumbers;                    // => [1, 4, 3, 7, 2, 6]