/* Problem
  Given a matrix contained by an array of subarrays return a new
  array with the columns and rows transposed. Allow for any matrix
  with any number of columns and rows
  
  Do not mutate the original array
  
  Input: Array of sub-arrays
  Output: Array of sub-arrays
  Data Structure: Array
  
  Algo
  
  1. Create a result array
  2. iterate over the length the first sub-array
  3. push an empty array to the result array
  4. iterate over the array and subarray
  5. set each element to it's opposite reference
  6 return result array
  
*/

function transpose(matrix) {
    let result = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
        result.push([]);
    }
    
    for (let i1 = 0; i1 < matrix.length; i1++) {
        for (let i2 = 0; i2 < matrix[i1].length; i2++) {
            result[i2][i1] = matrix[i1][i2];
        }
    }
    console.log(result);
    console.log(matrix);
    
}


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

transpose(matrix)


transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]

transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]




