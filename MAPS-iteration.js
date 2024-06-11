const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const restraunt = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //if we wanted oenin hours still in obj , before ES6 we would have to write it like this
  // openingHours: openingHours,

  //ES6 Enhanced obj literal
  openingHours,
  oredrDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your Pasta with ${ing1} , ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...restIngredients) {
    console.log(mainIngredient);
    console.log(restIngredients);
  },
};

//====================================== ITERATION OF MAPS =================================
//there is another way to populate a map without using a set method
// => and this is preferable

//we are gona make a map and give it an array in which the first position is gonna be a key and
//the second position is gonna be the value

const question = new Map([
  //this is the first entry of the question map
  ["question", "What is a best programming language in world?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎊🎊🎊"],
  [false, "Wrong Answer 😭😭😭"],
]);

console.log(question);

//convert Object to map
console.log(Object.entries(openingHours));

const openHours = new Map(Object.entries(openingHours));
console.log(openHours);

//maps are also iterables

//QUIZ app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answers ${key}: ${value}`);
  }
}

const answer = Number(prompt("Your Answer"));
console.log(answer);

if (answer === question.get("correct")) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

//Sometomes we also need to convert a map back to an array
//CONVERTING A MAP TO ARRAY
console.log([...question]);
//methods for arrays
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
