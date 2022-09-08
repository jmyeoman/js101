// Problem
// Given a year determine how friday the thirteenths ocurred in the
// year.
// Input: Year (number)
// Output: Number
// Data Structure: array
// Algorithm
// 1. create a count variable and set it to 0
// 2. Create a months array
// 3. Iterate over the months array
// 4. for each month enter the 13th and determine if it's a friday
// 5. add to the count each time it is
// 6. return count

const MONTHS = ['January', 
                'February', 
                'March', 
                'April', 
                'May', 
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December']

function fridayThe13ths(year) {
  let count = 0;
  
  for (let i = 0; i < MONTHS.length; i++) {
    let currentMonth = new Date(`${MONTHS[i]} 13 ${year}`);
    if (currentMonth.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2