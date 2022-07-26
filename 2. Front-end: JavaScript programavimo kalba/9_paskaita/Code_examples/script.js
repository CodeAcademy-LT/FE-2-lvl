/*
 ********* Closures (helps reach local and global variables for other functions)
 */
let action = (function () {
  let counter = 0;
  return function () {
    ++counter;

    return counter;
  };
})(); // functions works as IIFE (function is called immediately)

// console.log(action()); // returned value: 1
// console.log(action()); // returned value: 2 (previous value which is 1 + 1)
// console.log(action()); // returned value: 2 (previous value which is 2 + 1)

/*
 ********* Currying
 */
// --
let sum = (num1) => {
  return (num2) => (num3) => num1 + num2 + num3;
};

let sumWithOne = sum(1)(1)(1);
let sumWithTwo = sum(2)(2)(2);

// console.log(sumWithOne);
// console.log(sumWithTwo);

let addOne = sum(1);
let addTwo = addOne(1);
let addThree = addTwo(1);

// console.log('addThree', addThree);

// --
let greeting = (name) => (language) => `${language}, ${name}!`;

let userOne = greeting('John');

let greetingInLT = userOne('Labas');
let greetingInENG = userOne('Hello');

// console.log('greetingInLT', greetingInLT);
// console.log('greetingInENG', greetingInENG);

// --
let showMakeAndModel = (make) => (model) => `${make} ${model}`;

let opel = showMakeAndModel('opel');
let audi = showMakeAndModel('audi');

let opelAstra = opel('astra');
let opelVectra = opel('vectra');

// console.log(opelAstra);
// console.log(opelVectra);

/*
 ********* Recursion
 */
// -- example with loop
const printHelloWorldWithLoop = (times) => {
  for (let i = 0; i < times; i++) {
    console.log(`Hello World (${i + 1})`);
  }
};

// printHelloWorldWithLoop(4);
// console.log('---');

// -- same example with recursion
const printHelloWorldWithRecursion = (times, current = 1) => {
  if (times === 0) return;

  console.log(`Hello World (${current})`);

  return printHelloWorldWithRecursion(times - 1, current + 1);
};

// printHelloWorldWithRecursion(4);

// Užduotis Nr. 3 galimi sprendimai:
const generateUniqueId = (amountOfCharacters, id = '') => {
  if (amountOfCharacters === 0) return id;

  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  if (id.includes(randomSymbol)) generateUniqueId(amountOfCharacters, id);

  id += randomSymbol;

  return generateUniqueId(amountOfCharacters - 1, id);
};

console.log(generateUniqueId(10));
