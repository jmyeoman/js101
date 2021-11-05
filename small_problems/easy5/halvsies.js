// input: An array
// output: Two arrays nested in an array
// rules: first half of elements in array go in the first nested array.
// second half of elemenets go in second array.
// if the length is odd then the middle element goes in the first array.



function halvsies(array) {
 let resultArr = [[],[]]
 
 for (let i = 0; i < array.length; i++) {
   if (i < (array.length / 2)) {
     resultArr[0].push(array[i])
   } else {
     resultArr[1].push(array[i])
   }
 }
 return resultArr
}



console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]