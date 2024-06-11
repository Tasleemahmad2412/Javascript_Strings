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
//================================================================================================
if (restraunt.openingHours.mon) console.log(restraunt.openingHours.mon.open);
else console.log("Restraunt is closed on monday");

if (restraunt.openingHours.fri) console.log(restraunt.openingHours.fri.open);

if (restraunt.openingHours && restraunt.openingHours.mon)
  console.log(restraunt.openingHours.mon.open);
// with optional chaining we can do the same thing in a much easier way
// when a certain property doesnt exist then undefined is returned immediately
// console.log(restraunt.openingHours.mon.open);   this gives an error without optional chaining

//with optional chaining
console.log(restraunt.openingHours.mon?.open);
console.log(restraunt.openingHours.fri?.open);

console.log(restraunt.openingHours?.mon?.open);

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of weekDays) {
  const open = restraunt.openingHours[day]?.open ?? "Closed";

  console.log(`On ${day}, we open at ${open} `);
}

//Optional chaining does indeed also works on methods
//we can check if a method actually exist before we call it
console.log(restraunt.order?.(0, 1) ?? "Method does not exist");
console.log(restraunt.orderRisotto?.(0, 1) ?? "Method does not exist");

//Optional chaining also works on arrays
//to check if an array is empty
const users = [{ name: "John", email: "hello@example.com" }];
console.log(users[0]?.name ?? "User is Invalid");
