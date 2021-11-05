// Problem
// -given an array mutate the array so that the elements are 
// reversed without using the reverse() method
// Rules: 
// 1. Can't use reverse()
// 2. empty array returns an empty array
// Input: Array
// Output: The same Array
// Data Structure
// Manipulating an array
// Algorithm
// 1. Create a copy of the array
// 2. Loop through array
// 3. remove the last item
// 4. add the first item from the copy
// 5. return the array

function reverse(arr) {
  let copy = Array.from(arr);
  for (let i = 0; i < arr.length; i++) {
    arr.pop()
    arr.unshift(copy[i])
  }
  return arr
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// [0, 1, 2, 3, 4, 5]
// leftIndex = 0
// rightIndex = 5
// while (leftIndex < 3)
// 0 = 5
// 5 = 0
// 1 = 4
// 4 = 1
// 2 = 3
// 3 = 2