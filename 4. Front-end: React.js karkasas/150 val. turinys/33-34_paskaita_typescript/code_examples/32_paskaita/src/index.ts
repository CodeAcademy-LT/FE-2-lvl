import { Car, Button, IconButton } from './interfaces/interfaces';

// Basics
// -- Everyday Types
// --- primitives
// ---- implicit
let name = 'John';

// ---- explicit (optional for: string, number, boolean)
let surname: string = 'Smith';
let age: number = 24;
let hasCar: boolean = true;

let hasFriends: any; // if variables hasn't strick data type, it mus uses explicit and any type
hasFriends = true;

// --- arrays
let favoriteMovies: string[] = ['Home alone'];
favoriteMovies.push('Home alone 2');

let favoriteNumbers: number[] = [1, 4, 7];
favoriteNumbers.push(17);

let randomStuff: any[] = [1, true, 'Hello'];

// ---- tuples for arrays
let config: [boolean, number, string, string] = [true, 12, 'Hello', 'World'];
let settings: [boolean, string][] = [];
settings.push([true, 'Hello']);

// --- objects
// ---- types
type User = {
  name: string;
  age: number;
  likesMovies?: boolean;
  hasDog?: boolean;
  hasCar?: boolean;
};

let user: User = {
  name: 'John',
  age: 25,
  likesMovies: true,
  hasDog: false,
};

type City = string | boolean;
let cyty: City = 'Kaunas';

// ---- interfaces
let car: Car = {
  make: 'Audi',
  model: 'A6',
  year: 2015,
  madeInGermany: true,
  damaged: true,
};

car.damaged = false;

let button: Button = {
  text: 'Click Me',
  action: () => console.log('Button Clicked'),
};

let iconButton: IconButton = {
  text: 'Follow us on Facebook',
  action: () => console.log('Follow!'),
  icon: 'fa fa-facebook',
};

// --- union (sets possible data types for variable)
let price: number | string = '15'; // price might be number or string

// --- funtions
let sum = (a: number, b: number): number => a + b;

interface Greeting {
  (a: string): string;
}

let greetingInEnglish: Greeting = (name) => `Hello, ${name}`;
let greetingInGerman: Greeting = (name) => `Guten Tag, ${name}`;

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

// --- funtions + union
let controller = (direction: Direction): void =>
  console.log(`User moves to ${direction}`);

console.log(controller('UP'));

// --- Typescrip + DOM
const rootDiv: HTMLElement = document.querySelector('#root') as HTMLElement;

const insterHelloWorld = (place: HTMLElement): void => {
  const p = document.createElement('p');
  p.innerText = 'Hello World';

  place.appendChild(p);
};

insterHelloWorld(rootDiv);
