// Problem:
// Given 3 numbers representing the lengths of the sides of a triangle
// return a string that labels the triangle as equilateral, Isosceles
// Scalene, or invalid
// Input: 3 numbers
// output: A string
// Data Structure: Subfunctions
// Algorithm:
// 1. write a subfunction for if it is one of the three types
// 2. create an if else state for all four results

function isZero(side1, side2, side3) {
  return side1 === 0 || side2 === 0 || side3 === 0;
}

function isTooShort(side1, side2, side3) {
  return ((side1 + side2) < side3) ||
         ((side1 + side3) < side2) ||
         ((side2 + side3) < side1);
}

function isInvalid(side1, side2, side3) {
  return isZero(side1, side2, side3) || isTooShort(side1, side2, side3);
}

function isEquilateral(side1, side2, side3) {
  return side1 === side2 && side1 === side3;
}

function isIsosceles(side1, side2, side3) {
  if (side1 === side2) {
    return true;
  } else if (side1 === side3) {
    return true;
  } else if (side2 === side3) {
    return true;
  } else {
    return false;
  }
}

function triangle(side1, side2, side3) {
  if (isInvalid(side1, side2, side3)) {
    return 'invalid';
  } else if (isEquilateral(side1, side2, side3)) {
    return 'equilateral';
  } else if (isIsosceles(side1, side2, side3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"