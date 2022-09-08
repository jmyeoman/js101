// Problem: Given an array sort the array by making concecutive
// passes through the array and comparing ajacent elemenents
// until the array is sorted from least to greatest
// Rules: Once a pass is made with no swaps then the sort is completed
// Input: Array of numbers
// Output array of numbers
// Data Structure: Array/ mutate the array
// Algorithm:
// 1. create a still_swapping variable set to false
// 2. Create a do while loop with the condition still_swapping
// 3. Create a for loop initialized to zero and condition length
//    -1
// 4. compare current element to next element 
//   a. if next element is less than current swap and set still swapping
//   to true


function bubbleSort(arr) {
  let still_swapping = false;
  
  do {
    still_swapping = false;
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let current_value = arr.slice(i, i + 1);
        let next_value = arr.slice(i + 1, i + 2);
        
        arr[i] = next_value[0];
        arr[i + 1] = current_value[0];
        
        still_swapping = true;
      }
    }
  } while (still_swapping);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]