// Problem
// Given a number return the index of the first fibonacci number that
// has the number of digits given
// Input number
// Output BigInt
// Data Structure: No Arrays or Objects
// Algorithm
// Iterate over the fibonacci sequence and once the number of digits matches
// the number given return the index of that number

function findFibonacciIndexByLength(num) {
  let fibonacciSequence = [1n, 1n];
  let currentFib = 1n;
  let i = 2n;
  
  while (String(currentFib).length < num) {
    currentFib = (fibonacciSequence[i - 1n] + fibonacciSequence[i - 2n]);
    fibonacciSequence.push(currentFib);
    i += 1n;
  }
  
  return i;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);