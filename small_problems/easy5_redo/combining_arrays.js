// Problem
// Write a function that takes two arrays as arguments and combines them
// if a value is repeated it's only added once.
// Inputs: arrays
// Output: a single array
// Data Structure: array
// Algorithm
// create a copy of the first array
// iterate over the first array 
// on each loop check if the element is already contained by the first
// array.
// If it is not then push the element to the new array
// return the new array

function union(arr1, arr2) {
  let newArr = arr1.slice();
  
  arr2.forEach(element => {
    if (arr1.includes(element)) return;
    newArr.push(element);
  });
  
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]