// Problem:
// Given a sorted array and an item to match search the array for the matching 
// item by searching half of the array and a half of that half continuing until 
// you reach the item and return the index if it is found or -1 if it is not
// found
// Input: Array and a value that is a string or a number
// Output: Number
// Data Structure: Array
// 2. Set starting index to 0 and ending index to length
// 3. While length of starting index and ending is greater than one
// 2. Set current index to middle of starting index and ending index
// 3. if Item at current index equals searched item return index
// 4. if item is geater than current item 
//    starting index = current index
// 5. if item is less than current index 
//    ending index equals current index
// 6. End loop
// 7. if item at beginning index === item return index
// 8. if item at ending index === item return index
// 9. return -1

function binarySearch(arr, item) {
  let startingIdx = 0;
  let endingIdx = arr.length -1;
  let distance = endingIdx - startingIdx;
  
  while (distance >= 0) {
    let middleIdx = Math.floor(distance / 2) + startingIdx;
    
    if (arr[middleIdx] === item) return middleIdx;
    
    if (item > arr[middleIdx]) startingIdx = middleIdx + 1;
    
    if (item < arr[middleIdx]) endingIdx = middleIdx - 1;
    
    distance = endingIdx - startingIdx;
  }
  return -1;
}

// 02345
// 45
// 5, 5
// 5, 4

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
