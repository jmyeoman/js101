function union(array1, array2) {
  let newArray = array1.slice();
  function isNotRepeat(num, array) {
    let result = true;
    for(let i = 0; i < array.length; i++) {
      if (num === array[i]) {
        result = false;
      }
    }
    return result;
  }
  array2.forEach( element => {
    if (isNotRepeat(element, array1)) {
      newArray.push(element)
    }
    });
  return newArray
}
  


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]