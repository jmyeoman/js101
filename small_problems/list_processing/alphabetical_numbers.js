// Problem:
// Take an array of intgers and return an array of those integers sorted 
// in alphabetical order by the english word for each number
// Input: array of numbers
// Output: array of numbers
// Data Structure array or object for english words 
// Algorithm:
// make an array of english words for numbers matching the index number
// up to 19 and starting at 0
// Transform the numbers into words (map)
// Sort words by alphabetical order
// transform words to numbers
// return array of sorted numbers

const NUMBER_WORDS = ['zero', 'one', 'two', 'three',
                      'four', 'five', 'six', 'seven', 
                      'eight', 'nine', 'ten', 'eleven', 
                      'twelve', 'thirteen', 'fourteen', 
                      'fifteen', 'sixteen', 'seventeen', 
                      'eighteen', 'nineteen'];

function alphabeticNumberSort(arr) {
  
  return arr.map(num => NUMBER_WORDS[num])
            .sort((a, b) => {
              if (a < b) {
                return -1;
              } else if (a > b) {
                return 1;
              } else {
                return 0;
              }
            })
            .map(word => NUMBER_WORDS.indexOf(word));
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0])
