// if ...else
let numberOne = 5;
let numberTwo = 2;

if (numberOne >= numberTwo) {
  console.log(
    `numberOne(${numberOne}) yra daugiau negu numberTwo(${numberTwo})`
  );
} else {
  console.log(
    `numberTwo(${numberTwo}) yra daugiau negu numberOne(${numberOne})`
  );
}

if (numberOne === 5) {
  let str = 'Wohhoo';
  console.log(str);
}

// else ...if
let weather = 'sunny';

if (weather === 'snow') {
  console.log('Wear coat');
} else if (weather === 'rain') {
  console.log('Wear rain jacket');
} else {
  console.log('Wear what ever you want');
}

// if ...else and else ...if with falsy values
let name = ''; // falsy value (false)
let number = 0; // falsy value (false)
let hasCar = true; // falsy value (false)
let phoneNumber = undefined; // falsy value (false)
let friends = null; // falsy value (false)

if (friends) {
  console.log('Value is true');
}

// switch statement
let action = 'multiplication';
let num1 = 5;
let num2 = 8;

switch (action) {
  case 'composition':
    console.log(`${num1} + ${num2} =`, num1 + num2);
    break;
  case 'substraction':
    console.log(`${num1} - ${num2} =`, num1 - num2);
    break;
  case 'multiplication':
    console.log(`${num1} * ${num2} =`, num1 * num2);
    break;
  case 'division':
    console.log(`${num1} / ${num2} =`, num1 / num2);
    break;
  default:
    console.log('Unknown action');
}

if (action === 'composition') {
  console.log(`${num1} + ${num2} =`, num1 + num2);
} else if (action === 'substraction') {
  console.log(`${num1} - ${num2} =`, num1 - num2);
} else if (action === 'multiplication') {
  console.log(`${num1} * ${num2} =`, num1 * num2);
} else if (action === 'division') {
  console.log(`${num1} / ${num2} =`, num1 / num2);
} else {
  console.log('Unknown action');
}
