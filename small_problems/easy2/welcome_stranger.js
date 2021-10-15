function greetings(array, object) {
  let elements = array.reduce((a, c) => a + ' ' + c  );
  return `Hello, ${elements}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.