/* Problem

1. Given an array containing three arrays each with three number elements
// Transpose the array so that the collumn numbers are switched to the corresponding
// row numbers
2. Do not mutate the original array

Input: Nested Array
Output: Nested Array
Data Structure: Array

Algorithm

1 2 3

4 5 6

7 8 9

1 4 7

2 5 8

3 6 9

1. iterate over the array
[0][0] -> [0][0]
[0][1] -> [1][0]
[0][2] -> [2][0]

[1][0] -> [0][1]
2. for each iteration switch the first index with the second index
*/

function transpose(arr) {
  let resultArr = [[], [], []]
  
  for (let i = 0; i < arr.length; i++) {
    for (let i2 = 0; i2 < arr[i].length; i2++) {
      resultArr[i2][i] = arr[i][i2]
    }
  }
  
  return resultArr
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transposeInPlace(matrix) {
  [[matrix[0][0], matrix[0][1], matrix[0][2]], 
  [matrix[1][0], matrix[1][1], matrix[1][2]], 
  [matrix[2][0], matrix[2][1], matrix[2][2]]] 
  
  =
  
  [[matrix[0][0], matrix[1][0], matrix[2][0]], 
  [matrix[0][1], matrix[1][1], matrix[2][1]],
  [matrix[0][2], matrix[1][2], matrix[2][2]]];
}


transposeInPlace(matrix);

console.log(matrix);
