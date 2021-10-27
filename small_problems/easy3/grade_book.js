function getGrade(num1, num2, num3) {
  let mean = (num1 + num2 + num3) / 3;
  if (90 <= mean && mean <= 100) {
    return 'A';
  } else if (80 <= mean && mean < 90) {
    return 'B';
  } else if (70 <= mean && mean < 80) {
    return 'C';
  } else if (60 <= mean && mean < 70) {
    return 'D';
  } else if (0 <= mean && mean < 60) {
    return 'F';
  }
  
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"