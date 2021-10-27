function isPalindrome(string) {
  let middleFirst = Math.ceil((string.length / 2));
  let middleSecond = Math.floor((string.length / 2))
  let firstHalf = string.slice(0, middleFirst);
  let secondHalf = string.slice(middleSecond).split('').reverse().join('');
  return (firstHalf === secondHalf);
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true