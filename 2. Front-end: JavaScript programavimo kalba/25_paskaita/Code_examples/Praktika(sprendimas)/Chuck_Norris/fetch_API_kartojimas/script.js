// ----- V1 -----
// --------------

// API endpoints
const SINGLE_JOKE_ENDPOINT = 'https://api.chucknorris.io/jokes/random';

// Variables
const singleJokeOutput = document.querySelector('#single-joke');

// Functions

// Events
document.addEventListener('DOMContentLoaded', () => {
  fetch(SINGLE_JOKE_ENDPOINT)
    .then((response) => response.json())
    .then((data) => (singleJokeOutput.innerText = data.value))
    .catch((error) => console.log(error));
});

// ----- V2 -----
// --------------

// API endpoints
// -- after = sign must add category name
const SINGLE_JOKE_BY_CATEGORY_ENDPOINT =
  'https://api.chucknorris.io/jokes/random?category=';
// Variables
// -- DOM elements
const formElement = document.querySelector('form');
const selectElement = document.querySelector('select');
const singleJokeByCategoryOutput = document.querySelector(
  '#single-joke-by-category'
);
// -- current Joke category
let currentJokeCategory = 'animal';

// Functions
const changeCurrentJokeCategory = (e) => (currentJokeCategory = e.target.value);
const getJokeBycategory = (e) => {
  e.preventDefault();

  return fetch(SINGLE_JOKE_BY_CATEGORY_ENDPOINT + currentJokeCategory)
    .then((response) => response.json())
    .then((result) => (singleJokeByCategoryOutput.innerText = result.value))
    .catch((error) => console.log(error));
};

// Events
selectElement.addEventListener('change', changeCurrentJokeCategory);
formElement.addEventListener('submit', getJokeBycategory);

// ----- V2 -----
// --------------
// Sukurkite index.html ir script.js failus. Index.html failo viduje bus matoma 3 mygtukai (<button>) ir vienas blokas atvaizdavimui (<div>). Priklausomai nuo paspausto mygtuko, atvaizavimo bloke bus matomi:
// -posts arba;
// -comments arba
// -toods
// Posts, Comments arba Toodos endpoint'us rasite šiame API: https://jsonplaceholder.typicode.com

// API endpoint
// -- posible endpoint endings: /posts /commnets /todos
let API_ENDPOINT = 'https://jsonplaceholder.typicode.com/';

// Variables
const btns = document.querySelectorAll('.btn');
const outputElement = document.querySelector('#output');

// Functions
const getData = (e) => {
  return fetch(API_ENDPOINT + e.target.dataset.type)
    .then((response) => response.json())
    .then((data) => {
      let result = data.slice(0, 10);
      let output = '';

      for (let item of result) {
        output += `
        <h3>${item.title ? item.title : item.name}</h3>
        <p>${item.body ? item.body : item.completed}</p>
        `;
      }

      outputElement.innerHTML = output;
    });
};

// Events
btns.forEach((btn) => btn.addEventListener('click', getData));

// ----- V3 -----
// --------------

// Variables
// -- DOM elements
const radios = document.querySelectorAll('input[type="radio"]');
const todosOutput = document.querySelector('#todos-output');

// -- data from API
let data = [];

// Functions
const filterTodos = (e) => {
  todosOutput.innerHTML = data
    .filter((item) => '' + item.completed === e.target.id)
    .reduce((total, current) => {
      total += `
      <ul>
       <li>${current.title}</li>
       <li>${current.completed ? 'DONE' : 'NOT DONE'}</li>
      </ul>
      `;

      return total;
    }, '');
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  fetch(API_ENDPOINT + 'todos')
    .then((response) => response.json())
    .then((result) => {
      let todos = result.slice(0, 20);

      todosOutput.innerHTML = todos.reduce((total, current) => {
        total += `
        <ul>
         <li>${current.title}</li>
         <li>${current.completed ? 'DONE' : 'NOT DONE'}</li>
        </ul>
        `;

        return total;
      }, '');
      data.push(...todos);
    });
});

radios.forEach((radio) => radio.addEventListener('change', filterTodos));
