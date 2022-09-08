// Problem
// Given an array of subarrays that represents a matrix create and
// return a new matrix array with all of the elements rotated 90
// degrees clockwise
// Rules: 
// 1. Must not mutate original
// Input: Array
// Output: array
// Data Structure: array
// Algo
// 1. Create a result array
// 2. populate the array with the same number of empty arrays
// as there are in the row length
// 3. iterate through the column indices
// 4. iterate through the row indices
// 5. set the element at the column index into the row index
// and the row index equal to the length of the column index minus
// 1 minus the current column index

function rotate90(matrix) {
  let result = [];
  let rowCount = matrix[0].length;
  
  for (let i = 0; i < rowCount; i++) {
    result.push([]);
  }
  
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      result[colIdx][matrix.length - 1 - rowIdx] = matrix[rowIdx][colIdx];
    }
  }
  
  return result
}
// [[ , , , 3], [], [], []] 
// [[], [], [], []] 
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]


/*
00 01 02 03
10 11 12 13
20 21 22 23
30 31 32

20 10 00
21 11 01
22 12 02
23 13 03

00 => 02
01 => 12
02 => 22
03 => 32

10 => 01
11 => 11
12 => 21
13 => 31

20 => 00
21 => 10
22 => 20
23 => 30

column = 
*/








