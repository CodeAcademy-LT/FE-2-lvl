// FUNKCIJOS:

// - Funkcijos deklaracija (function declaration)
function showMessage() {
  let message = 'Hello world!';

  console.log(message);
}

showMessage(); // <-- funkcijos iškvietimas

// --
function showGreeting(name) {
  let message = `Hello, ${name}`;

  console.log(message);
}

showGreeting('John');
showGreeting('Rose');

// --
function sum(num1, num2) {
  console.log(`${num1} + ${num2} =`, num1 + num2);
}

sum(4, 8);

// --

function showUserName() {
  let userName = 'Rose';
  console.log(userName);
}

showUserName();

// console.log(userName);

// --
function showFavoriteMovie(movie = 'Batman') {
  console.log(`My favorite movie is ${movie}.`);
}

showFavoriteMovie('Superman');

function sum(a = 0, b = 0) {
  console.log('sum:', a + b); // a = 4 (+) b = 0
}

sum(4);

// -- ... functions must (most of the time) return something
let name1 = 'John';
let surname1 = 'Smith';

let name2 = 'Rose';
let surname2 = 'Smith';

function showUserInfo(name, surname, language) {
  if (!name || !surname) {
    return 'Please provide name, surname';
  }

  switch (language) {
    case 'english':
      return `User: ${name} ${surname}`;
    case 'lithuanian':
      return `Vartotojas: ${name} ${surname}`;
    default:
      return 'Please provide languague';
  }
}

let userOneInfo = showUserInfo(name1, surname1, 'english');
console.log('userOneInfo', userOneInfo);

let userTwoInfo = showUserInfo(name2, surname2, 'lithuanian');
console.log('userTwoInfo', userTwoInfo);

// - Funkcijos ekspresija (function expression)

// function generateRandomId(idLength) {
//   let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

//   let idArray = [];

//   while (idArray.length < idLength) {
//     idArray.push(symbols[Math.round(Math.random() * symbols.length)]);
//   }

//   return idArray.join('');
// }

// --
const generateRandomId = function (idLength) {
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

  let idArray = [];

  while (idArray.length < idLength) {
    idArray.push(symbols[Math.round(Math.random() * symbols.length)]);
  }

  return idArray.join('');
};

let userId = generateRandomId(40);

console.log(userId);

// - Rodyklės funkcija (arrow function)
const greetingOne = 'Hello world';
const greetingTwo = 'Hello world.';

const addDotToString = (string) => {
  if (string.includes('.')) {
    return string;
  }

  return string.concat('.');
};

console.log(addDotToString(greetingOne));
console.log(addDotToString(greetingTwo));

// --
const generateRandomNumber = () => Math.floor(Math.random() * 100);

console.log(generateRandomNumber());
