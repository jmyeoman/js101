function isPalindromicNumber(num) {
  function isNumber(thing) {
    return typeof thing === 'number';
  }
 
  let numString = String(num)
  let reverseNumString = numString.split('').reverse().join('')
  
  return isNumber(num) && numString === reverseNumString
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(022));           // true
console.log(isPalindromicNumber(5));            // true