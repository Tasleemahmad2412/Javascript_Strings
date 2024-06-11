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
//===========================================================

//new data structure is introduced called sets and MAps
//1. Set is basically just a collection of unique values
//2. set can never have any duplicates
//3. there uniqueness makes them useful in certain situations

//now lets make a set here
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissoto",
  "Pasta",
  "Pizza",
]);
//SETS can offcourse hae mixed data types
console.log(ordersSet);
//the answer has no key values just a bunch of values grouped together like
//Set(3) {"Pasta", "Pizza", "Rissoto"}
// => just like arrays sets are also iterables
//set is different from array it has unique values and also order of elements in set is irrelevant
//Strings are also iterables
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
//we can also delete elements from sets
ordersSet.delete("Rissoto");
//ordersSet.clear();
console.log(ordersSet);

//we cannot retrieve data from sets in same way as arrays
//like console.log(ordersSet[0]) will not work!!! it will give undefined behavior
// its bcoz in sets there is actually no idexes and infact there is no way to getting values out of a set
//we can only check if a certain value is in a set or not

//sets are also iterables so we can loop over them
for (const order of ordersSet) console.log(order);

//now lets see a big use case for them
//normal use case is to remove duplicate values from an array
//Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
//we only want to know the positions in the resturaunt
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//conversion of set to array is easy bcoz both are iterables
console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);

//same can be done by counting how many letters are in a string
console.log(new Set("TasleemAhmadNaeem").size);

//at the end sets are not intended to replace the arrays
