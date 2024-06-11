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
};
restraunt.oredrDelivery({
  time: "22.30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restraunt.oredrDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

//Object Destructuring (we use curly braces)
//in objects the order of elements doesnt matter like arrays
//we have to specify the exact name of the elements
const { name, openingHours, categories } = restraunt;
console.log(name, openingHours, categories);
//thsi is extremely useful for the language espacially when we deal with returned objects of an API

//what if we want variable names to be different from the property names
//we can also change the name of the variables while destructuring
//but we still need to specify the original names or otherwise the javascript language wont know

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restraunt;

console.log("---------------------------");
console.log(
  "Name: ",
  restaurantName,
  "Opening Hours: ",
  hours,
  "Categories: ",
  tags
);

//Default Values
const { menu = [], starterMenu: starters = [] } = restraunt;
console.log(menu, starters);

//mutating variable while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//------------------ NESTED OBJECTS -------------------------
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
