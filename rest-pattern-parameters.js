const restraunt = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oredrDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your Pasta with ${ing1} , ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...restIngredients) {
    console.log(mainIngredient);
    console.log(restIngredients);
  },
};

//=======================================================================================================

//This whole first part is about:
// 1) De-structuring
//REST pattern looks excatly like the spread operator
//has the same syntax as (...) but it actually does the opposite of the spread
//rest pattern collect miltiple elements and condense then into an array
//SPREAD becaouse it is on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST syntax because its on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//1 2 (3) [3, 4, 5]

//we can use the ... on both sides of the =
const [pizza, , rissoto, ...otherFood] = [
  ...restraunt.mainMenu,
  ...restraunt.starterMenu,
];
console.log(pizza, rissoto, otherFood);
//it des not include any skipped items only the ones that are after rissoto as we can see we skiped one
//from the mainMenu (pasta)
// and also the rest element must be the last elemnet we cannot select any element after rest it will
//give an error message like [pizza, , rissoto, ...otherFood, Garlic Bread] this will give an error
// also for the same readon there can only be one REST operator in any destructuring

//now lets have a look at objects
//only difference will be that the remaining elements will be collected in an object NOT in array

const { sat, ...weekDays } = restraunt.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4);
//we want to add multiple numbers not limited to any number of arguments e.g
// add(2,3) or add(2,3,4) etc...
const x = [23, 2, 57, 4];
add(...x);

//using rest in our object of restraunt
restraunt.orderPizza("mushrooms", "onions", "pepparoni", "olives");
restraunt.orderPizza("mushrooms");
