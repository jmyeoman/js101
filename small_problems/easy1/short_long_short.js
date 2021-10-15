function shortLongShort(string1, string2) {
  let length1 = string1.length
  let length2 = string2.length
  if (length1 > length2) {
    console.log(string2 + string1 + string2)
  } else if (length1 < length2) {
    console.log(string1 + string2 + string1)
  }
}

let rlSync = require("readline-sync")
let str1 = rlSync.question('Give me the first string\n')
let str2 = rlSync.question('Give me the second string\n')

shortLongShort(str1, str2)