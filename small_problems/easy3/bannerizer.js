/*
Completed, but working on how to wrap text.


How to wrap text
Iterate through elements
if element index - 1 === maxWidth
  



*/


function multiple(width, index) {
  return (width % (index + 1 === 0));
}


function logInBox(banner, maxWidth){
/* 
  if ((banner.length + 4) > maxWidth) {
    banner = banner.split('')
    banner.length = maxWidth - 4
    banner = banner.join('')
  }
*/

  let lineOne = '+' + '-'.repeat(banner.length + 2) + '+';
  let lineTwo = '|' + ' '.repeat(banner.length + 2) + '|';
  let lineThree
  
  if ((banner.length + 4) > maxWidth) {
    banner = banner.split('')
    for (let index = 0; index < banner.length; index++) {
      
    }
    lineThree = -1
  } else {
    lineThree = '| ' + banner + ' |';
  }
  console.log(`${lineOne}\n${lineTwo}\n${lineThree}\n${lineTwo}\n${lineOne}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Mr. Smith Goes To Washington', 12);