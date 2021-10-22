function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


function isColorValid2(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid2("blue"));
console.log(isColorValid2("black"));

function isColorValid3(color) {
  return (color === "blue" || color === "green") ? true : false;
}

console.log(isColorValid3("blue"))
console.log(isColorValid3("black"))
