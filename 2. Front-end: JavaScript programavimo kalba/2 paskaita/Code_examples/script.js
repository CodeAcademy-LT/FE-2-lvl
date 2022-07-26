/* JavaScript kintamieji, duomenų tipai */
/* -------------------------------------*/

/* 1. Variables */
/*--------------*/

/*
 *** variable with let, let's declare and change value
 *** variable with const let's only declare value
 */

const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
const STEP_NUMBER = 10;

let greetingMessage;

const AGE = 24;

if (AGE >= 18) {
  greetingMessage = 'Hello, adult';
} else {
  greetingMessage = 'Hello, minor';
}

// console.log(greetingMessage);

/* 2. Duomenų tipai */
/* -----------------*/
/* 2.1 Boolean */
/* ------------*/
let isActive = false;
console.log('isActivei:', isActive);
console.log('5 > 4', 5 < 4);
console.log('5 == 5', 5 == 5);

let isAdult;
if (AGE >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

if (isAdult) {
  console.log('Welcome');
} else {
  console.log(`Sorry, you're under age`);
}

/* 2.2 Null */
/* ---------*/
let amount = null;
console.log('amount', amount);

/* 2.3 Undefined */
/* --------------*/
let height;
console.log('height', height);

/* 2.4 Number */
/* -----------*/
let numberOne = 1;
let numberTwo = 1.23;
let numberThree = new Number(2);

console.log('numberTwo', numberTwo);
console.log('numberThree', numberThree);
console.log('numberOne', numberOne + 5);
console.log('NaN (Not a Number)', 5 + undefined);

/* 2.5 BigInt */
/* -----------*/

/* 2.6 String */
/* -----------*/

// let greetingOne = "Hello";
let greetingTwo = 'Hello';
let greetingThree = `Hello`;

/* 2.7 Symbol */
/* -----------*/

/* 2.8 Object */
/* -----------*/
let userName = 'John Smith';
let userAge = 25;
let userHasCar = true;

let user1 = {
  name: 'John',
  age: 25,
  address: {
    city: 'London',
    country: 'UK',
  },
  hasCar: false,
  greeting: function () {
    return `Hello, my name is ${this.name} and I ${
      this.hasCar ? 'have car.' : "don't have car."
    }`;
  },
};

console.log(user1.address.city); // <-- calling object properties
console.log(user1.greeting()); // <-- calling object method

/* typeof */
/* ------ */
console.log(typeof userName);
