// Problem 
// Given three angles (numbers) return a string that determines
// whether the triangle is right, acute, obtuse, or invalid
// Input: 3 numbers
// Output: String
// Data Structure: none
// Algorithm
// Determine the longest, shortest, and middle lengths of the triangle
// If they don't add to 180 or any angle is 0 return invalid string
// if one angle is 90 return right triangle
// if one angle is greater than 90 degrees return obtuse
// remaining triangles will be acute

function triangle(side1, side2, side3) {
  let total = side1 + side2 + side3
  let least = Math.min(side1, side2, side3)
  let greatest = Math.max(side1, side2, side3)
  let middle = 180 - least - greatest
  
  
  if (total !== 180 || least < 1) {
    return 'invalid'
  } else if (greatest === 90) {
    return 'right'
  } else if (greatest < 90) {
    return 'acute'
  } else {
    return 'obtuse'
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"