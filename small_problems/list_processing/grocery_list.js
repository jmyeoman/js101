// Problem
// Write a function that takes a two dimensional array and returns 
// a one dimensional array with each grocery item listed (potentially)
// multiple times based on the quantity listed.
// Intake: 2 dimensional array
// Output: 1 dimensional array
// Datastructure: Array
// Algorithm
// Create a result array
// itterate over the subarrays
// create a for loop that pushes the grocery item to the result array
// the same number of times as the quantity listed
// return result array

function buyFruit(arr) {
  let list = [];
  
  arr.forEach(subArr => {
    for (let quantity = 1; quantity <= subArr[1]; quantity += 1){
      list.push(subArr[0]);
    }
  })
  
  return list;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]