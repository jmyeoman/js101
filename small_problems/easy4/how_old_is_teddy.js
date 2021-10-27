function age(min, max) {
  
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(`Teddy is ${age(20, 120)} years old!`)