// Problem
// Check for palindromes but this time case and non-alphabetic characters
// are ignored

function isRealPalindrome(str) {
  str = removeNonAlphabet(str);
  return isPalindrome(str);
  
}

function removeNonAlphabet(str) {
  let strArr = str.split('')
                  .filter(char => {
                    return (char.toLowerCase() >= 'a') && (char.toLowerCase() <= 'z'); 
                  });
  
  return strArr.join('').toLowerCase();
}

function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("Madam, I'm Adam"));      // false (all characters matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));  