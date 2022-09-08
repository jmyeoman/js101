// Problem:
// Given an odd integer, n, log to the console a star using '*' and spaces
// where the middle row is n stars long and each row going up and down from the 
// center has three centered stars starting with 0 zero spaces between them and on
// each consecutive row going up or down the one space is added between the stars
// until you reach n height.
// input: number
// output: no return value, log to the console
// data structure: no arrays or objects
// Algo:
// create variable increment and initialize to 1
// create variable outerspace and initialize to 0
// create variable innerspace and assign to n - 3 / 2
// create variable iteration and initialize to 1
// while iteration greater than zero
// if iteration = n / 2 ceil
//   log to console '*' n times
//   increment assigned -1
//   iteration equals iteration  plus increment
//   continue
// log to the console ' 'outerspace times + '*' plus ' ' innerspace times + '*'
//   + ' ' innerspace times + '*' + ' ' outerspace times
// outer space = outerspace + increment
// innerspace = innerspace - increment
// iteration equals iteration plus increment
// end

function star(n) {
  let increment = 1;
  let outerSpace = 0;
  let innerSpace = (n - 3) / 2;
  let iteration = 1;
  let notFlipped = true;

  while (iteration > 0) {
    console.log(' '.repeat(outerSpace) + '*' + ' '.repeat(innerSpace) + '*' +
                ' '.repeat(innerSpace) + '*' + ' '.repeat(outerSpace))
    if (iteration === Math.floor(n / 2) && notFlipped) {
      console.log('*'.repeat(n));
      increment = -1;
      notFlipped = false;
      continue;
    }
    outerSpace += increment;
    innerSpace -= increment;
    iteration += increment;
  }
}


star(7)
star(17)
