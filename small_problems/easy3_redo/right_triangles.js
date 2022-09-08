// Problem
// Given a postive integer, n, log a triangle whose sides has n stars
// Input: number
// Out put triangle logged to console
// Data Structure: ?
// Algorithm
// create a while loop
// create a string that starts with a single star
// while n greater than zero
// log the string to the console padded with n spaces
// add a star to the string
// subtract one from n

function triangle(n) {
  let stars = '*';
  let padding = n
  do {
    console.log(stars.padStart(padding, ' '));
    
    stars += '*';
    n -= 1;
  } while (n > 0);
}

triangle(5)
triangle(9)