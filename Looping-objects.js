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
//=============================================================================
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} day:`;
for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

const Entries = Object.entries(openingHours);
console.log(Entries);

for (const [day, { open, close }] of Entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
