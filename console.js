//let numberOfStudents = 17;//

//Check if we have more than 20 students, if yes console log "classroom too small"

//else console log "classroom size acceptable"

let numberOfStudents = 17;
if (numberOfStudents < 20) {
  console.log("classroom too small");
} else {
  console.log("classroom size acceptable");
}

//let numberOfHouses = 5;

//Check if this person’s number of houses is greater than 2 - if true console.log(“you need to sell more houses”)

//If 2 or less houses - log “seems reasonable”

let numberOfHouses = 5;
if (numberOfHouses < 2) {
  console.log("you need to sell more houses");
} else {
  console.log("seems reasonable");
}

//let bill = 20;

//Check if the bill is higher than 15 if yes “we should split the bill”

//If not higher than 15 “I’ll get the bill this time”

let bill = 20;
if (bill > 15) {
  console.log("We should split the bill");
} else {
  console.log("I'll get the bill next time.");
}

//4. (OPTIONAL) Write an if/else statement for the following requirements:

//If students get 55 or lower: console log "Not to good"
//If students get 60 or lower: console log "ehhhh"
//If students get 70 or lower: console log "Keep trying"
//If students get 80 or lower: console log "nice!"
//If students get 90 or lower: console log "Doing good!"
//else console log "over 90! great!"

let grade = 98;

if (grade <= 55) {
  console.log("Not too good");
} else if (grade <= 60) {
  console.log("ehhh");
} else if (grade <= 70) {
  console.log("keep trying");
} else if (grade <= 80) {
  console.log("nice!");
} else if (grade >= 90) {
  console.log("Doing good!");
}

//I want you to think of 3 more interesting examples using a simple conditional (checking person’s name, checking person’s age, checking something….)

let age = 20;

if (age >= 21) {
  console.log("Come and in, let me make you a cocktail!");
} else {
  console.log(
    "Sorry, you might be interested in going to Chuck E. Cheese instead."
  );
}

let hostileAlien;
let alien = "unfriendly";

if (alien === "friendly") {
  console.log("Welcome Alien!");
} else {
  console.log("Fire fazers!");
}
