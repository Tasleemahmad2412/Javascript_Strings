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
};
//=========================================================================================================

//basically we can use spread operator to expand an array into all its elements
//(unpacking all the array elements all at omce)

//  =>this is the FIRST situation in which we use to expand the arrays
const arr = [7, 8, 9];
//now we want to create a new array based on this one but now with some elements at the beginning

//Manual way to create a new array
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//but we can do this in a much better way using a spread operator
const newArray = [1, 2, ...arr];
console.log(newArray);
//it will display the elemnets seperately (1 2 3) not as ([1,2,3])
console.log(...arr);

// => this is the SECOND situation when we pass args to functions
//we want to create a new menu here from the obj above
const newMenu = [...restraunt.mainMenu, "Gnocci"];
//keep in mind here we are completely creating a new array
console.log(newMenu);
//spread element is a bit similar to destructuring but the difference is that it takes all the elements
//from the array and also cannot create new variables

//2 important use cases of SPREAD OPERATOR
// 1. create shallow copies of arrays

const mainMenuCopy = [...restraunt.mainMenu];

// 2. merge 2 arrays together
const realMenu = [...restraunt.mainMenu, ...restraunt.starterMenu];
console.log(realMenu);

//Spread operator not work only on arrays but on all iterables
//iterables are like arrays, strings, maps, sets but NOT objects
//most of the built in Data structures in Js are iterables but not objects

//lets take a string
const str = "Tasleem";
const letters = [...str, " ", "A"];
console.log(letters);
console.log(...str);
// it wont work as template literal ${...str}

//now lets write our own function that excepts multiple arguments and then use spread operator
// const ingredients = [
//   prompt("Lets make pasta Ingredient 1 ?"),
//   prompt("Lets make pasta Ingredient 2 ?"),
//   prompt("Lets make pasta Ingredient 3 ?"),
// ];
//console.log(ingredients);
//old way
//restraunt.orderPasta(ingredients[0] , ingredients[1] , ingredients[2]);

//using spread operator
//restraunt.orderPasta(...ingredients);

//Since 2018 ES6 spread operator also works on objects
//Objects
const newRestraunt = { foundedIn: 1998, ...restraunt, founder: "Guisseppe" };
console.log(newRestraunt);

//like arrays we can also do shallow copies of objetcs instead of using dot asign
const restrauntCopy = { ...restraunt };
//now if we want to make changes
restrauntCopy.name = "Tasteez";
console.log(restrauntCopy.name);
console.log(restraunt.name);
