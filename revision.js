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

//============================================================================
// SHORT CIRCUITING
//============================================================================
console.log(3 || "Jhonas");
restraunt.numGuests = 0;
const guest1 = restraunt.numGuests ? restraunt.numGuests : 10;
console.log(guest1);

const guest2 = restraunt.numGuests || 10;
console.log(guest2);
if (restraunt.orderPizza) {
  restraunt.orderPizza("mushrooms", "spinach");
}
restraunt.orderPizza && restraunt.orderPizza("mushrooms", "spinach");
//returns last value if all are truthy
