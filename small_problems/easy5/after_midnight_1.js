// PEDAC
// Input: number
// Output: string
// Summary of problem:
// Take a number either positive or negative and calculate the
// time based on how many minutes before or after midnight the 
// number indicates
// Rules:
// 1. Must be able to use positive and negative numbers
// 2. Hours are based on military time
// 3. Must be able to cycle through the numbers multiple times
// i.e. must take numbers that exceed the time in a single day
// 
// Example:
// Given -3
// find time in absolute minutes (day = 1440)
// absolute time equals 1437 
// Get remainder of 1440 to take away additional days
// get remainder of 60 set this equal to minutes
// Get division of number by 60 and round down to get hours
// Insert numbers in a string with ':'
// Return string

const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MINUTES_PER_WEEK = MINUTES_PER_DAY * WEEK_DAYS.length

function addZero(num) {
  return num < 10 ? num = '0' + String(num) : num = String(num)
}

function formatTime(minutes, hours, day) {
  return `${day} ${hours}:${minutes}`
}

function timeOfDay(num) {
  let weeklyMinutes = num % MINUTES_PER_WEEK
  if (weeklyMinutes < 0) {
    weeklyMinutes = weeklyMinutes + MINUTES_PER_WEEK
  }
  
  let day = WEEK_DAYS[Math.floor(weeklyMinutes / MINUTES_PER_DAY)]
  
  let dailyMinutes = weeklyMinutes % MINUTES_PER_DAY
  
  let minutes = String(dailyMinutes % MINUTES_PER_HOUR)
  let hours = String(Math.floor(dailyMinutes / MINUTES_PER_HOUR))
  
  minutes = addZero(minutes)
  hours = addZero(hours)
  
  return formatTime(minutes, hours, day)
}


console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));
console.log(timeOfDay(-4231))