let flintstones = ["Fred", "Wilma"]
let newFlintstones =flintstones.concat("barney", "Betty")
let finalFlintstones = ["Dino", "Rufus"]
let anotherFlintstones = ['Buddy'].concat(...flintstones)
flintstones.forEach(element => finalFlintstones.push(element))


console.log(flintstones)
console.log(newFlintstones)
console.log(finalFlintstones)
console.log(anotherFlintstones)