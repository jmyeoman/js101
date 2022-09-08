// Problem 
// Given a number, count, create a list of switches initially turned off.  
// pass over the switches count times and each pass toggle the switches first
// starting with every one, then every two, and so forth incrementing the gap
// in toggles until you'v made all passes. Return an array of the numbers of
// switches tha are turned on at the end.
// Rules: toggle switches numbers start at 1 not 0
// Input: number
// output: array
// Algo:
// - Create a create toggle list function
// - Use one parameter for count
// - Create variable toggles and initialize an empty array
// - create incrementer variable initialized to 1
// - Loop count times
// - on each loop add an array with a two elements the current incrementer and
// -   the number 0
// - return toggles array
// 
// - Main function
// - create toggles variable and initialize to create toggles funtion passed 
// -   count
// - Create a loop that loops for count times
// -   on each loop iterate over toggles
// -      if toggle element at index 1 remainder incrementer is zero:
// -        if current second element is 0 change to 1 and if 1 change to 0
// - end loops 
// - Select elements that have value 1 and return in new array
// - transform array to array of just first elements of subarray

function lightsOn(switches) {
  let toggles = createToggles(switches);

  for (let i = 1; i <= switches; i++) {
    for (let j = 0; j < toggles.length; j++) {
      if (toggles[j][0] % i === 0) {
        toggles[j][1] = toggles[j][1] ? 0 : 1;
      }
    }
  }

  return toggles.filter(toggle => toggle[1]) 
                .map(toggle => toggle[0]);
}


function createToggles(switches) {
  let toggles = [];
  for (let i = 1; i <= switches; i++) {
    toggles.push([i, 0]);
  }
  return toggles;
}

console.log(lightsOn(5))
console.log(lightsOn(100))