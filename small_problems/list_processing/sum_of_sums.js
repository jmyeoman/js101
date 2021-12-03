// Problem
// Write a function  that takes an array of numbers and returns
// the sum of each leading subsequence
// Input an array of numbers
// Output Number
// Rules: 
// Datastructure: array
// Algorithm
// iterate ove the array
// for each element add the current value to the sum of sums of the previous
// numbers

// 1
// 1 + ()


function sumOfSums(arr) {
  let sumTotal = 0;
  
  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    let sum = 0;
    
    for(let index2 = 0; index2 <= index1; index2 += 1) {
      sum += arr[index2];
    }
    sumTotal += sum;
  }
  return sumTotal;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));
