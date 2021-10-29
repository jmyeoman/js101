function doubleNumbers(numbers) {
  let counter = 0;
  while (counter < numbers.length) {
    numbers[counter] = numbers[counter] * 2
    counter += 1;
  }

  return numbers
}

let arr = [1, 2, 3, 4, 5]

console.log(doubleNumbers(arr))