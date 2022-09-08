// Problem:
// Given an array sort the array in ascending order using a 
// recursive function that separates the elements into nested 
// arrays and then merges those subarrays together in a sorted 
// manner.
// Input: array
// Output: array
// Data Structure: array
// Algo:
// A recursive function has:
// 1. A function that calls itself
// 2. A way to increment the return value
// 3. A stopping condition
// 
// . Splice the first half and the second half
// . push

// Did not complete Algo before looking at solution 


function mergeSort(arr) {
  if (arr.length === 1) return arr;
  
  let subArr1 = arr.slice(0, arr.length / 2);
  let subArr2 = arr.slice(arr.length / 2);
  
  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);
  
  return merge(subArr1, subArr2);
}



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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]