// Problem
// Given a number multiply the number by 2 unless the number is even and 
// the left numbers match the right numbers
// Input: number
// Output: number
// Create a guard clause that returns the given number if the number
// is even and the right side of numbers equals the left side
// multiply the number by 2 and return it

function twice(num) {
  let middleIndex = String(num).length / 2;
  if (String(num).slice(0, middleIndex) === String(num).slice(middleIndex)) return num;
  return num * 2
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676