function factors(number) {
  let divisor = number;
  let factors = [];
  
  if (number <= 0) {
    return 'This is not a valid number';
  } else {
    while (divisor !== 0) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    }
  }
  return factors;
}

console.log(factors(25))
console.log(factors(56))
console.log(factors(0))
console.log(factors(-25))