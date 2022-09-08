// JS doesn't support function overloading. Functions of the same name will have the latter function
// overwrite the former function. 

function range(start, end = null) {
  if (end === null) {
  end = start;
  start = 0
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));