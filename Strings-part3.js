//split() adn join()
// console.log("hey what are you doing?".split(" "));
// const [fname, lname] = "Tasleem Ahmad".split(" ");
// const newName = ["Mr.", fname, lname.toUpperCase()].join("--");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" "); // Trim the input to remove leading/trailing spaces
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));

//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("  jessica ann smith davis  "); // Output: Jessica Ann Smith Davis
// capitalizeName("Tasleem Ahmad "); // Output: Tasleem Ahmad
// capitalizeName(" Farwa Sheikh"); // Output: Farwa Sheikh

//PADDING
const message = "GO to gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));

// -----------------------------------------------------

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(83248923759847589));
console.log(maskCreditCard("93247329479834982"));
//what we have to do :
//we have to show only last 4 numbers and we will display others as some kind of symbols

//NOW REPEAT()
//allows us to repeat the same string multiple times
const msg = "Bad Weather... All Departures Delayed!!!\n";

//now we have to create a bigger string repeating the above one multiple times
console.log(msg.repeat(5));

const planesInLine = function (n) {
  return `There are ${n} planes in line ${"✈️ ".repeat(n)}`;
};
console.log(planesInLine(5));
console.log(planesInLine(3));
console.log(planesInLine(12));
