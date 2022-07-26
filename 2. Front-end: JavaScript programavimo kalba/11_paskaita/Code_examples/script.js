/*
 * *** PIRMA PASKAITA ***
 */

//               0         1        2     Masyvai yra indeksuojami nuo 0
let fruits = ['Apple', 'Orange', 'Plum'];
console.log('1. fruits:', fruits); // 'Apple', 'Orange', 'Plum'
console.log('fruits[0]:', fruits[0]); // 'Apple'

// -- length
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log('randomFruit:', randomFruit);

fruits[fruits.length] = 'Lemon';
console.log('2. fruits:', fruits); // 'Apple', 'Orange', 'Plum', 'Lemon'

// -- .pop() - removes last array item
fruits.pop();
console.log('3. fruits:', fruits); // 'Apple', 'Orange', 'Plum'

fruits.pop();
console.log('4. fruits:', fruits); // 'Apple', 'Orange'

let removedLastFruitsItem = fruits.pop();
console.log('5. fruits:', fruits); // 'Apple'
console.log('removedLastFruitsItem', removedLastFruitsItem); // 'Orange'

// -- .push(newItem) - adds item to the end of an array
fruits.push('Banana');
console.log('6. fruits:', fruits); // 'Apple', 'Banana'

let lengthOfFruits = fruits.push('Strawberry');
console.log('lengthOfFruits', lengthOfFruits); // returns length: 3 ('Apple', 'Banana', 'Strawberry')
console.log('7. fruits:', fruits); // 'Apple', 'Banana', 'Strawberry'

// -- .shift() - removes first array item
let removedFirstFruitsItem = fruits.shift();
console.log('8. fruits:', fruits); // 'Banana', 'Strawberry'

// -- .unshift(newItem) - adds item to the start of an array
fruits.unshift('Raspberry');
console.log('9. fruits:', fruits); // 'Raspberry', 'Banana', 'Strawberry'

// -- Arrays and loops
// Currnent arr: 'Raspberry', 'Banana', 'Strawberry'

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}

// -- for loop
let numbers = [4, 84, 6, 33, 85, 1, 56, 100];
let lowerThan10 = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 10) lowerThan10.push(numbers[i]);
}

console.log('lowerThan10', lowerThan10);

// -- for of loop
let movies = ['Batman', 'Spiderman', 'Wonder Wooman'];

for (let movie of movies) {
  console.log('for...of:', movie);
}

for (let movieIndex in movies) {
  console.log('for...in:', movies[movieIndex]);
}

// -- nested arrays
let matrix = [
  [1, 2, 3], // matrix[0]
  [4, 5, 6], // matrix[1]
  [7, 8, 9], // matrix[2]
];

console.log('matrix', matrix[1][1]);

// -- .splice()
let numbersArray = [1, 2, 3, 4, 5, 4, 2, 9]; // 1, 2, 3, 4, 5, 6, 7, 8, 9

numbersArray.splice(5, 2, 6, 7, 8);
// num 5 means: where to start
// num 2 means: how many items remove from start (5)
// nums 6, 7, 8 means: values which will be added
console.log('numbersArray', numbersArray);

let anotherNumbersArray = [1, 2, 3, 4, 5, 9]; // 1, 2, 3, 4, 5, 6, 7, 8, 9
anotherNumbersArray.splice(5, 0, 6, 7, 8);

console.log('anotherNumbersArray', anotherNumbersArray);

// -- .slice()
let sliceOfAnotherNumbersArray1 = anotherNumbersArray.slice(0, 5); // [1, 2, 3, 4, 5]
let sliceOfAnotherNumbersArray2 = anotherNumbersArray.slice(-2); // [8, 9]

console.log('sliceOfAnotherNumbersArray1', sliceOfAnotherNumbersArray1);
console.log('sliceOfAnotherNumbersArray2', sliceOfAnotherNumbersArray2);

// -- .concat()
let randomNumbersArray = [1, 5, 3];
let randomStringsArray = ['1', '5', '3'];
let randomBooleansArray = [true, false];

let mergedRandomStuffsArray = randomNumbersArray.concat(
  randomStringsArray,
  randomBooleansArray
);

console.log('mergedRandomStuffsArray', mergedRandomStuffsArray);

// -- .indexOf() direction of loop [-->]
// let numbersArray = 1, 2, 3, 4, 5, 6, 7, 8, 9 <-- defined in line 82

// -- .lastIndexOf() direction of loop [<--]
// let numbersArray = 1, 2, 3, 4, 5, 6, 7, 8, 9 <-- defined in line 82

let indexOfFive = numbersArray.indexOf(5); //  numbersArray.lastIndexOf(5);
console.log('indexOfFive neighbours', indexOfFive);

// -- includes()
// let numbersArray = 1, 2, 3, 4, 5, 6, 7, 8, 9 <-- defined in line 82
let hasNumberSeven = numbersArray.includes(7);

console.log('hasNumberSeven', hasNumberSeven);

// -- .find()

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Rose' },
  { id: 3, name: 'Diana' },
];

let user = users.find(function (item, index, array) {
  return item.id === 3;
});

console.log('user', user);
