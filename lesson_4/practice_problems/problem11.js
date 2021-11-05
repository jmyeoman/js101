let statement = "The Flintstones Rock";

function letterFrequency(str) {
  let result = {};
  str.split('').forEach(element => {
    if (element === ' ') return;
    if (!result[element]) {
      result[element] = 1;
    }  else {
      result[element] += 1;
    }
  })
  return result;
}

console.log(letterFrequency(statement))