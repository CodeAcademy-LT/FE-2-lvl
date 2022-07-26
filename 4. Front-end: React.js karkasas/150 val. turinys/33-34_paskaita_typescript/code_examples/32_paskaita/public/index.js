// Basics
// -- Everyday Types
// --- primitives
// ---- implicit
var name = 'John';
// ---- explicit (optional for: string, number, boolean)
var surname = 'Smith';
var age = 24;
var hasCar = true;
var hasFriends; // if variables hasn't strick data type, it mus uses explicit and any type
hasFriends = true;
// --- arrays
var favoriteMovies = ['Home alone'];
favoriteMovies.push('Home alone 2');
var favoriteNumbers = [1, 4, 7];
favoriteNumbers.push(17);
var randomStuff = [1, true, 'Hello'];
// ---- tuples for arrays
var config = [true, 12, 'Hello', 'World'];
var settings = [];
settings.push([true, 'Hello']);
var user = {
    name: 'John',
    age: 25,
    likesMovies: true,
    hasDog: false,
};
var cyty = 'Kaunas';
// ---- interfaces
var car = {
    make: 'Audi',
    model: 'A6',
    year: 2015,
    madeInGermany: true,
    damaged: true,
};
car.damaged = false;
var button = {
    text: 'Click Me',
    action: function () { return console.log('Button Clicked'); },
};
var iconButton = {
    text: 'Follow us on Facebook',
    action: function () { return console.log('Follow!'); },
    icon: 'fa fa-facebook',
};
// --- union (sets possible data types for variable)
var price = '15'; // price might be number or string
// --- funtions
var sum = function (a, b) { return a + b; };
var greetingInEnglish = function (name) { return "Hello, " + name; };
var greetingInGerman = function (name) { return "Guten Tag, " + name; };
// --- funtions + union
var controller = function (direction) {
    return console.log("User moves to " + direction);
};
console.log(controller('UP'));
// --- Typescrip + DOM
var rootDiv = document.querySelector('#root');
var insterHelloWorld = function (place) {
    var p = document.createElement('p');
    p.innerText = 'Hello World';
    place.appendChild(p);
};
insterHelloWorld(rootDiv);
export {};
