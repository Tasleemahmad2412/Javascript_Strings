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

//============================================================================
//DAta structure that we can use to map values to keys
//like objects data is stored in key value pairs in maps
//The big difference between objects and maps is that the keys can have any type
//in object keys are basically always strings
//we can have any type of keys it can be an obj , arrays or another map

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lissbon, portugal");

console.log(rest.set(2, "Lissbon, portugal"));
rest
  .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open :D")
  .set(false, "We are Closed :(");

//in order to read data from the map we use the get method
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// lets see the methods that are avilable on maps
//lets check if the map contains a certain key
console.log(rest.has("Categories"));
rest.delete(2);
console.log(rest.size);
//

//now lets see that we can use arrays or objects as map keys
//rest.set([1, 2], "Test");
// console.log(rest.get([1,2])); This wont work bcoz [1,2] abovwe is sperate obj than this one in console.log in heap so this wont work
//we can do this by storing the array in a variable and then using it
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

//we also use objects as map keys
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
