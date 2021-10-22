function findFibonacciIndexByLength(num) {
  let currentNum = 1n
  let lastNum = 0n
  let index = 0n
  while (true) {
      currentNum = currentNum + lastNum
      lastNum = currentNum - lastNum
      console.log(lastNum)
      index += 1n
      if (String(lastNum).length == num) {
        console.log(`The index of the first fibonacci number with ${num} digits is ${index}.`)
        break;
      }
    }
  }




findFibonacciIndexByLength(2n);    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n);   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
/*
findFibonacciIndexByLength(1000n) === 4782n;
*/
// The last example may take a minute or so to run.