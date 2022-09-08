// Problem
// Given a floating point number representing between 0 and 360 degrees
// return a string with the angle broken down into degrees, minutes
// and seconds
// Data structure: No object or array
// Input: number
// Output: string
// Algorithm
// Round the number down and store it as degrees variable
// Get the remainder of 1 and multiply that by 60
// store the rounded down number to minutes variable
// Get the remainder of 1 of last remainder and multiply by 60
// round that number and store it as the seconds
// Ahead of everything else determine if the number is 360
// if it is return 360 or 0 degrees
// interpolate variables with degree minutes and seconds signs and
// return the string

function dms(degreesFloat) {
   const MINUTES_PER_DEGREE = 60
   const SECONDS_PER_MINUTE = 60
  degreesFloat.toExponential()
  if (degreesFloat % 360 === 0 && degreesFloat !== 0) {
    return `${degreesFloat}˚00'00" or 0˚00'00"`
  }
  
  degreesFloat = degreesFloat % 360

  
  if (degreesFloat < 0) {
    degreesFloat = 360 + degreesFloat
  }
  
  let degrees = Math.floor(degreesFloat)
  let remainderOfDegrees = degreesFloat % 1
  let minutesWithRemainder = remainderOfDegrees * MINUTES_PER_DEGREE
  let minutes = addZero(Math.floor(minutesWithRemainder))
  let remainderOfMinutes = minutesWithRemainder % 1
  let secondsWithRemainder = remainderOfMinutes * SECONDS_PER_MINUTE
  let seconds = addZero(Math.floor(secondsWithRemainder))
  
  return `${degrees}˚${minutes}'${seconds}"`
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`
  } else {
    return `${num}`
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"