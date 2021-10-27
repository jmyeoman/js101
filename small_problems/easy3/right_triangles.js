/*
START
SET padding equal to n
SET numberOfStars equal to one
WHILE numberOfStars is less than or equal to n
  Console.log '*' 
  repeated numberOfStars times
  numberOfStars += 1
END
*/

function triangle(n) {
  let numberOfStars = 1;
  while (numberOfStars <= n) {
    console.log('*'.repeat(numberOfStars).padStart(n, ' '));
    numberOfStars += 1;
  }
}

triangle(5);
triangle(9);