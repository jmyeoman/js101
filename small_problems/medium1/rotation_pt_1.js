// Problem
// Given an array return a new array with the first element
// removed and placed at the end of the array
// Rules:
// 1. Don't mutate original array
// 2. Return Undefined if the argument is not an array
// Input: Array
// Output: Array
// Data Structure: Array
// Algorithm:
// 1. Make a copy of the array
// 2. remove the first element and save it to a varibale
// 3. Place the first element at the end of the copied array
// 4. Return the new array

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr
  let newArr = arr.slice();
  let firstElement = newArr.shift();
  newArr[newArr.length] = firstElement;
  return newArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]