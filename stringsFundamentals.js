const airline = "TAP Air Portugal";
const plan = "A320";

//we can get a charcter from string from certain location
console.log(plan[0]);
console.log(plan[1]);
console.log(plan[2]);
console.log("B737"[0]);

// we can also read the length property of the strings
console.log(airline.length);
console.log("B737".length);

// now methods
//1. indexOf
//first accurence but what if we wahnt the last occurance
console.log(airline.indexOf("r"));

console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
//stops extracting before reaching index 7
console.log(airline.slice(0, airline.indexOf(" ")));
//extracting last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));

// ----------------------------------------------------------
const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("its not the middle seat");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
