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
//=============================================================================================
// ---------------------- OR -------------------------
// SHORT CIRCUITING
//upuntil now we have used logical operators oonly for combining boolean values and producing boolean values
// but actually we can do a lot more
// Lets start with the OR operator
let a = 3;
console.log(a || "Jhonas"); //3
// result of the OR operator doesnt have to be boolean
// THREE PROPERTIES ABOUT LOGICAL OPERATORS

// -> USe any data type,
// -> return any data type
// -> short CIRCUITING

// Short-circuiting: if the first value is a truthy value, it will immediately return that first value
console.log("" || "Jhonas"); //empty string is a falsy value
console.log(true || 0);
console.log(undefined || null); //undefined is a falsy value and will be return a null but null is also a falsy value

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello bcoz its first truthy value
let x = undefined || 0 || "" || "Hello" || 23 || null;
console.log(typeof x);

//restraunt.numGuests = 23;
const guest1 = restraunt.numGuests ? restraunt.numGuests : 10;
console.log("======");
console.log(guest1, "  |");
console.log("======");
//instead of doing this we can take advantage of short circuiting and the OR operator
// these will only work is the result of restraunt.numGuests is a truthy value
//if we set restraunt.numGests = 0 then it will show 10 but we wanted 0
const guest2 = restraunt.numGuests || 10;
console.log("======");
console.log(guest2, " |");
console.log("======");

console.log(
  "================================ AND ================================="
);
//in short-cicuiting AND works in exact opposite way of OR
console.log(0 && "Jhonas"); //0
console.log(7 && "Jhonas"); //if all the values are truthy then it will return the last value

console.log("Hello" && 23 && null && "Jhonas"); //null
//it will short circuit as soon as it encounters a falsy value

// practicle example
if (restraunt.orderPizza) {
  restraunt.orderPizza("mushrooms", "spinach");
}
// we can do this in more simple way
restraunt.orderPizza && restraunt.orderPizza("mushrooms", "spinach");

restraunt.orderPasta && restraunt.orderPasta("mushrooms", "spinach", "onion");
