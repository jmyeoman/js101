function multiply(numbers, multiple) {
  let multipliedNums = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    let multiNum = currentNum * multiple;
    multipliedNums.push(multiNum);
  }
  return multipliedNums
}


let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]