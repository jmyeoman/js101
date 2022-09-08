function randomBetween (min, max) {
  if (min > max) {
    let newMin = max
    let newMax = min
    max = newMax
    min = newMin
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(`Teddy is ${randomBetween(120, 20)} years old!`)


