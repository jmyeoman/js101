function findFibonacciIndexByLength(num) {
  let first = 1n;
  let second = 1n;
  let index = 2n;
  let digits = 1n;
  
  do {
    let fibonacci = first + second;
    first = second;
    second = fibonacci;
    
    digits = String(fibonacci).length;
    index += 1n;
  } while (digits < num);
  
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); 