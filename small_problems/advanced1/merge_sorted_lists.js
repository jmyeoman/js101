// Problem
// Given two arrays that contain sorted lists merge the two
// arrays in sorted order without using the sort method
// Rules:
// Must not mutate original array
// Input: Two Arrays
// Output: One new Array
// Data Structure: Array
// Algo:
// 1. Create result array
// 2. Copy both arrays
// 3. WHILE the lengths of both arrays are greater than 0
// 4. If first element in first array is less than or equal 
// to first element in second array remove element and add to
// result array
// 5. ELSE remove first element from second array and add it
// to the result array
// return result array

function merge(arr1, arr2) {
  let result = []
  arr1 = arr1.slice()
  arr2 = arr2.slice()
  
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length < 1) {
      result.push(arr2.shift());
      continue;
    }
    if (arr2.length < 1) {
      result.push(arr1.shift());
      continue;
    }
    
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    }
    
    if (arr2[0] <= arr1[0]) {
      result.push(arr2.shift())
    }
  }
  
  return result
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]