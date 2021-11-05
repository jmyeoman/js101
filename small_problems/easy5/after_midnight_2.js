 const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
  
function afterMidnight(time) {
  let hour = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));

  let minutesAfterMidnight = ((hour * MINUTES_PER_HOUR) + minutes);
  minutesAfterMidnight = minutesAfterMidnight % MINUTES_PER_DAY
  return minutesAfterMidnight
}  

function beforeMidnight(time) {
  return Math.abs((afterMidnight(time) - MINUTES_PER_DAY) % MINUTES_PER_DAY);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);