"use strict";
//destructuring arrays (Important topic)
const restraunt = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//theme of this section is to simulate a foot delivery application in specific italian restraunt
//build in data structures and modern advance operators
//destructuring is an ESX feature (It is a way of unpacking values from an array or an obj into seperate variables)
//in short terms destructuring is breaking a complex data structure into a smaller one like variables

const arr = [2, 3, 4];
//noramla way without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//but now with destructuring we can declare all the three variables at the same time
const [x, y, z] = arr;
//this looks like an array but its not its just destructuring assignments
//while doing this dont forget to declare variables using const
console.log(x, y, z);
//even if we do destructuring the orginal array is not affected
console.log(arr);

//--------------------------------------------------------------------------
let [main, , secondary] = restraunt.categories;
console.log("------------------------");
console.log(main, secondary);

//the owner of restraunt have now decided to switch the main and the secondary category
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("-----------------------");
// console.log(main, secondary);
//---------------------------------------------
//switching variables
//now we do this same thing using destructuring
[main, secondary] = [secondary, main];
console.log("------------------------");
console.log(main, secondary);

//we can have function return an array and then immediately destructuring that array
//this allow us to return multiple values from a function
console.log("------------------------");
//console.log(restraunt.order(2, 0));
//this returns an array now we are gonna destructure that
const [starter, maiin] = restraunt.order(2, 0);
console.log(starter, maiin);
//we receive 2 returned values from a function

//[DESTRUCTURING FOR A NESTED ARRAY]
const nested = [2, 4, [5, 6]];
// const [d, , f] = nested;
// console.log("------------------------");
// console.log(d, f);

//destructuring inside destructuring
//nested destructuring
const [i, , [j, k]] = nested;
console.log("------------------------");
console.log(i, j, k);

//another feature of destructuring
//we can also assign default values for variables when we are extracting them
//thats gonna be useful in cacse when we dont know the length of arrays

//if we have arry that is shorter than we might think then we might try to unpack the array in positions that dont even exist
//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log("------------------------");
console.log(p, q, r);
