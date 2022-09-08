let fibArr


function fib(nth) {
  fibArr = [0, 1, 1];
  return fibonacci(nth);
}


function fibonacci(nth) {
    if (fibArr[nth]) {
      return fibArr[nth];
     } else {
      fibArr.push(fibonacci(nth - 1) + fibonacci(nth - 2));
       return fibonacci(nth - 1) + fibonacci(nth - 2);
     }
}

console.log(fib(12))