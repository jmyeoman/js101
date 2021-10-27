/*
START
IF remainder of year doesn't equal 0 add 100 to year
Divide year by 100
remove decimals from year
Turn year into a string
add appropriate ending to the year using switch statement
RETURN year
END
*/

function century(year) {
  if ((year % 100) !== 0) {
    year = year + 100;
  }
  year = String(Math.floor(year / 100));
  if (year[year.length - 2] === '1') {
    year = year + 'th';
  } else {
    switch (year[year.length - 1]) {
      case '0':
        year = year + 'th';
        break;
      case '1':
        year = year + 'st';
        break;
      case '2':
        year = year + 'nd';
        break;
      case '3':
        year = year + 'rd';
        break;
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      year = year + 'th';
      break;
    }
  }
  return year;
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"