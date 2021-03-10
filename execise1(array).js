//ARRAY EXERCISE

let people = ["Greg", "Mary", "Devon", "James"];

//Nomor 1
for (let i = 0; i < people.length; i++) {
  console.log("Ini iterasi pakai forLoop dengan nama : ", people[i]);
}

//Nomor 2 using forEach
people.forEach(function (item, index) {
  console.log("Ini iterasi pakai forEach dengan nama : ", item);
});

//Nomor 3 Write the command to remove "Greg" from the array
people.shift();
console.log(people);

//Nomor 4 Write the command to remove "James" from the array.
people.pop();
console.log(people);

//Nomor 5 Write the command to add "Matt" to the front of the array
people.unshift("Matt");
console.log(people);

//Nomor 6 Write the command to add your name to the end of the array
people.push("Valdo");
console.log(people);

//Nomor 7 Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop
for (let i = 0; 1 < people.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(people[i]);
}

//Nomor 8 Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log(people); //cek siapa saja yg ada di dalam Array sekarang

let newPeople = people.slice(2);
console.log(newPeople);

//Nomor 9 Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie"
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//Nomor 10 Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
console.log(withBob);







//OBJECT EXERCISES
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Nomor 1 Write the command to add the language "Go" to the end of the languages array
programming.languages.push("GO");
console.log(programming.languages);

//Nomor 2 By using the bracket notation, change the difficulty to the value of 7
programming["difficulty"] = 7;
console.log(programming);

//Nomor 3 Using the delete keyword, write the command to remove the jokes key from the programming object
delete programming.jokes;
console.log(programming);

//Nomor 4 By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object
programming.isFun = true;
console.log(programming);

//Nomor 5 Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output
let outputLang = programming.languages.map(function (item, index) {
  return index + " - " + item;
});
console.log(outputLang);
