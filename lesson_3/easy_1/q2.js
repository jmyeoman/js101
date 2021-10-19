let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


function endsInEx(string) {
return string[string.length -1] === '!'
}

console.log(endsInEx(str1))
console.log(endsInEx(str2))