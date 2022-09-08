// Problem 
// Given a number determine the difference between the sum of the
// first count positive integers and the sum of the squares of the first
// count positive integers
// Input: Number
// Output: Number
// Data Structure: None just math
// Algorithm
// 1. create a function that adds the count integers and then squeares them
// 2. create a function that squares the count integers and then adds them
// 3. return the difference between the two

function sumSquareDifference(num) {
  return squareOfSums(num) - sumOfSquares(num);
}


function squareOfSums(num) {
  let countArr = count(num);

  let sum = countArr.reduce((acc, cv, index) => acc + cv);
  
  return sum ** 2;
}


function sumOfSquares(num) {
  let countArr = count(num);
  
  return countArr.map(element => element ** 2)
                 .reduce((acc, cv) => acc + cv);
  
}

function count(num) {
  let sumArr = [];
  
  for (let count = 1; count <= num; count++) {
    sumArr.push(count);
  }
  
  return sumArr;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150