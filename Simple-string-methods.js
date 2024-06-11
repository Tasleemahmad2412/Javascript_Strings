const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fixed capitalization in name
const passenger = "jOnAS"; //jhonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//function
const corrector = function (name) {
  const lower = name.toLowerCase();
  const correctName = lower[0].toUpperCase() + lower.slice(1);
  console.log(correctName);
};

corrector("TasLEem");
corrector("AlI");
corrector("ItAcHi");

//Comparing email

const email = "tasleem@gmail.com";
const loginEmail = " TasLeem@gmail.com \n";

//const lowerEmail = loginEmail.toLowerCase();
//trim() is used to remove spaces or enter characters
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

if (email === normalizedEmail) {
  console.log("VALID email");
} else {
  console.log("Invalid email");
}

//function
const emailComparison = function (email, loginEmail) {
  console.log(" =>  Function is being called ....");
  const normalizedEmail = loginEmail.toLowerCase().trim();
  if (email === normalizedEmail) {
    console.log("VALID email");
  } else {
    console.log("Invalid email");
  }
};
emailComparison("tasleem@gmail.com", "TasLeem@gmail.com");

//replacing
const priceGB = "288,97 Rp";
const priceUS = priceGB.replace(",", ".").replace("Rp", "$");
console.log(priceUS);

const announcement =
  "All passengers come to boadring door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
//replace() only replace the first occurance of the given string or char etc

// regular expresiions are important and complex!!! also called regex
console.log(announcement.replace(/door/g, "gate"));

//final topic of this section
//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A"));
if (plane.includes("A320")) {
  console.log("Hey its from the A320 series");
} else {
  console.log("Aww its not the A320");
}

console.log(plane.startsWith("A2"));
console.log(plane.startsWith("A320"));

//lets check that if the current plane is part of the new air bus family
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Plane if from the new air bus family");
}
//inclides() , startsWith() , endsWith()

//Practice
const checkIn = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("Sorry ! you are not allowed to board the plane ");
  } else {
    console.log(
      "You are all clear to board the plane, have a safe journey :) "
    );
  }
};

checkIn("i have a laptop, some Food and a pocket Knife");
checkIn("Socks and a Camera");
checkIn("Got some snacks and a gun for protection");
