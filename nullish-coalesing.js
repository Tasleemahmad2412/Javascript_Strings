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
//=========================================================================================
// ---------------- Nullish Coalescing Operator ----------------
// Nullish: null and undefined (NOT 0 or '')
restraunt.numGuests = 0;
const guest2 = restraunt.numGuests || 10;
console.log(guest2, "Number of guests");
// here it was supposed to be 0 because we did gie a value of ) guests but it shows 10
// because zero is a falsy value so it will be ignored and 10 will be printed
// by nullish operator we can solve this problem
// there is a  better solution to do this

//nullish operaotr that was introduse in ES2020
const guestCorrect = restraunt.numGuests ?? 10;
console.log(guestCorrect, "Number of guests");

// it works bcoz nullish coalesing operator works with nullish values instead of falsy values
// and nullsih values are : null and undefined (NOT 0 or ' ')
//for nullish operator 0 nad empty strings are not falsy values instead they are truthy
//only nullish values will short circuit the evaluation here
