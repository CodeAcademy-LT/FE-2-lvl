// ***** Object Literals *****
console.log('***** Object Literals *****');
// -- example 1
let user = {
  name: 'Peter',
  surname: 'Griffin',
  age: 38,
  friends: ['John Smith', 'Alex Ferguson'],
  adress: {
    city: 'London',
    country: 'UK',
  },
  hasCar: true,
};
// -- example 2
let audi = {
  make: 'Audi',
  model: 'A6',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started!`;
  },
};
let opel = {
  make: 'Opel',
  model: 'Astra',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started!`;
  },
};
console.log(opel.start());
let bmw = {
  make: 'BMW',
  model: '520',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started!`;
  },
};
// console.log('bmw', bmw);
// ***** Constructors & This *****
console.log('***** Constructors & This *****');
// -- Car objektu kurimo konstruktorius
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// -- Product objektu kurimo konstruktorius
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}
let xbox = new Product('X-box', 400, 5);
let playstation = new Product('Playstation', 500, 8);
// ***** Prototypes & Inheritence *****
console.log('***** Prototypes & Inheritence *****');
// --- metodo perdavimas objekto konstruktoriaus prototipui
Car.prototype.start = function () {
  return `${this.make} ${this.model} started!`;
};
Car.prototype.stop = function () {
  return `${this.make} ${this.model} stoped!`;
};
let tesla = new Car('Tesla', 'Model S', 2021);
let fiat = new Car('Fiat', 'Punto', 2021);
// console.log('tesla', tesla.start());
// console.log('fiat', fiat.stop());
// --- metodo perdavimas masyvo objekto konstruktoriui
let numbersArray = [1, 2, 3];
let stringsArray = new Array('labas', 'rytas');
Array.prototype.addSymbol = function (array, symbol) {
  let newArr = [];
  for (let item of array) {
    newArr.push('' + symbol + item);
  }
  return newArr;
};
console.log(numbersArray);
console.log(stringsArray);
console.log(numbersArray.addSymbol(numbersArray, 'Hello'));
console.log(stringsArray.addSymbol(stringsArray, 'Hello'));
// ***** ES6 Classes & Subclasses *****
// -- ES6 Classes
console.log('***** ES6 Classes & Subclasses *****');
class City {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  getIntroduction() {
    return `${this.name} is in the ${this.country}`;
  }
}
let london = new City('London', 'United Kongdom');
let vilnius = new City('Vilnius', 'Lithuania');
console.log(london.getIntroduction());
console.log(vilnius.getIntroduction());
// -- Subclasses
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 2000);
console.log(harryPotter);
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const people = new Magazine('People', 'Meredith Corporation', 2021, 06);
console.log(people);
