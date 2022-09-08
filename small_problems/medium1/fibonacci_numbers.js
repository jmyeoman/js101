
function fibonacci(num) {
  let first = 1
  let second = 1
  let n 
  
  for (let i = 2; i < num; i++) {
    n = first + second
    first = second
    second = n
  }
  return n
}

console.log(fibonacci(5))
console.log(fibonacci(3))

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050