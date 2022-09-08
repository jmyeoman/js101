// Problem given n representing a number return the fibonnaci number
// at the n place in the sequence
// input: Number
// output: Number
// Data Structure: ?
// Algorithm
// 1. Set the values of f1 and f2
// 2. Set an array equal to 0, 1, 1,
// 3. create a subfunction
// 4. if n index is truthy 
// 5. 

function withoutRecursion(num) {
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

function fibonacci(nth) {

    if (nth <= 2) return 1
    
    return fibonacci(nth - 1) + fibonacci(nth - 2)
}

console.log(withoutRecursion(5))
console.log(withoutRecursion(3))