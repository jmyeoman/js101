//Problem:
// take a positive integer and return the sum of it's digits
// input: number
// output: number
// Data structure: number to array to number
// algorithm:
// Transform the number into a string
// Transform string into an array 
// Transform each character to a number
// Iterate over the numbers and add them up
// Return number


function sum(num) {
  return String(num).split('')
                    .reduce((acc, cv) => Number(acc) + Number(cv));
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789))



