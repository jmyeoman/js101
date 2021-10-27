/*
START
IF number is a double
  return number
  ELSE return number * 2
END

START 
number.length remainder 2 equals 0
Set left = String(number).slice(0, number.length / 2))
Set
*/


function twice(num) {
  let stringNum = String(num);
  let left = stringNum.slice(0, stringNum.length / 2);
  let right = stringNum.slice(stringNum.length / 2);
  if (left === right) {
    return num;
  } else {
    return num * 2
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676