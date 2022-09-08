// Problem:
// Given a number, n, log to the console a diamond made of '*' that is n wide
// and n tall
// rules: n will only be n
// Input: number
// Output: multiple consectutive strings logged to the console, no return value
// Algo:
// - Create function top and pass it n
// - Create variable spaces and initialize to n - 1 divided by 2
// - Create variable stars and initialize to 1
// - loop over stars until stars = n
// - log to the console spaces number of ' ' + stars number of '*' plus spaces
// -   numbers of ' '
// - add 2 to stars 
// - subtract one from spaces
//
// - Create function bottom pass n
// - create variable spaces and assign 1
// - create variable stars and assign  n - 2
// - loop over stars until less than 1
// - log to the console spaces number ' ' + stars number '*' + spaces ' '
// - subtract 2 from stars 
// - add 1 to spaces
// 
// - main function
// - invoke bottom function passed n
// - log to the consol n "*"
// - invoke bottom function passed n

function diamond(n) {
  topStars(n);
  console.log('*'.repeat(n));
  bottomStars(n);
}



function bottomStars(n) {
  let spaces = 1;
  let stars = n - 2;

  while (stars >= 1) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    stars -= 2;
    spaces += 1;
  }
}


function topStars(n) {
  let spaces = (n - 1) / 2;
  let stars = 1;

  while (stars < n) {
  console.log(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
  stars += 2;
  spaces -= 1;
  }
}

diamond(5)
diamond(9)