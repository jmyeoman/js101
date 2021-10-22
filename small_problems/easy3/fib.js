let num1 = 7
let lastNum = 0
let currentNum = 1
  
  while (num1 > 0) {
      currentNum = currentNum + lastNum
      lastNum = currentNum - lastNum
      console.log(lastNum)
      num1 -= 1
    }