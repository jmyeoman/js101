// Problem
// Build a madlibs program
// 1. create lists of nouns, verbs, adjectives and adverbs
// 2. create a template that will have the words inserted
// 3. randomly choose words to be entered in the text and return it
// Input: template
// Output: String logged to console
// Data Structure: Array
// Algorithm
// 1. create templates
// 2. create arrays filled with words
// 3. create a choose word function
// a. takes an array as an argument
// b. returns a random element of the array
// 4. set each word type equal to the function call
// 5. return the template

let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around";
  
let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}";

function madlibs(template) {
  const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];
  
  let newTemplate = template.replaceAll('%{adjective}', chooseWord(ADJECTIVES))
                            .replaceAll('%{noun}', chooseWord(NOUNS))
                            .replaceAll('%{verb}', chooseWord(NOUNS))
                            .replaceAll('%{adverb}', chooseWord(ADVERBS));
          
  console.log(newTemplate);
}

function chooseWord(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

madlibs(template1);

madlibs(template2);