// Problem:
// Given a list of letters in pairs and a string return true or false depending
// on if the word can be spelled with the letters in the list without a pair
// being accessed twice. 
// Rules: Case doesn't matter
// Input: string, array of letter pairs
// Output: boolean
// Data Structure: array
// Algo:
// - create  a variable for a list of pairs using an array of sub-arrays.
// - create variable used pairs assigned empty string
// - iterate over string
// - if character is in used pairs return false
// - iterate over pairs and push pair that contains char to used pairs
// - end loops return true

// letter blocks
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

const pairs = [['B', 'O'], ['X','K'], ['D', 'Q'], ["C", 'P'], ['N', 'A'],
             ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
             ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

function isBlockWord(word) {
  let usedPairs = [];

  for (let char of word) {
    if (usedPairs.some(pair => char.toUpperCase() === pair[0] 
                       || char.toUpperCase() === pair[1])) return false

    usedPairs.push(pairs.find(pair => char.toUpperCase() === pair[0] 
                              || char.toUpperCase() === pair[1]));
  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true