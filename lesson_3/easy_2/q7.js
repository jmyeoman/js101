let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
function findNameandNum(obj, name){
  let arrayOfNames = Object.entries(obj)
  let newArray = []
  for (let i = 0; i < arrayOfNames.length; i++) {
    for (let i2 = 0; i2 < arrayOfNames[i].length; i2++) {
      if (arrayOfNames[i][i2] === name) {
        newArray.push(arrayOfNames[i][i2], arrayOfNames[i][i2 + 1])
      }
    }
  }
  return newArray
} 

console.log(findNameandNum(flintstones, 'Barney'))

let newFlint = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift()

console.log(newFlint)