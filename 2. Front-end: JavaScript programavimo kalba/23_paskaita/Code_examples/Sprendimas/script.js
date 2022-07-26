// Variables
const usersOutput = document.querySelector('#output');
// Promises (ES6)
// --** simple Promise example **--
// --- creating
// let simplePromise = new Promise((resolve, reject) => {
//   // executor
//   let userName = 'Ernestas';
//   if (userName === 'Ernestas') {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// });
// --- using
// console.log(simplePromise);
// simplePromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// NOTE: WE ALREADY USING PROMISES WITH Fetch API
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });
// --** more complex Promise example **--
// PROBLEM: need to update users lists asynchronously
const users = [
  { name: 'Peter', surname: 'Griffin' },
  { name: 'Lois', surname: 'Griffin' },
  { name: 'Chris', surname: 'Griffin' },
  { name: 'Meg', surname: 'Griffin' },
  { name: 'Stewie', surname: 'Griffin' },
];
// --- 1. problem solving using using callbacks (old way)
// function getUsers() {
//   setTimeout(() => {
//     let output = '';
//     users.forEach((user) => {
//       output += `
//       <ul>
//         <li>Name: ${user.name}</li>
//         <li>Surname: ${user.surname}</li>
//       </ul>
//       `;
//     });
//     usersOutput.innerHTML = output;
//   }, 1000);
// }
// getUsers();
// function createUser(user, callback) {
//   setTimeout(() => {
//     users.push(user);
//     callback();
//   }, 2000);
// }
// createUser({ name: 'Brian', surname: 'Griffin' }, getUsers);
// --- 2. problem solving using using Promises (new way)
// function getUsers() {
//   setTimeout(() => {
//     let output = '';
//     users.forEach((user) => {
//       output += `
//       <ul>
//         <li>Name: ${user.name}</li>
//         <li>Surname: ${user.surname}</li>
//       </ul>
//       `;
//     });
//     usersOutput.innerHTML = output;
//   }, 1000);
// }
// getUsers();
// function createUser(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       users.push(user);
//       let failed = false;
//       if (!failed) {
//         resolve();
//       } else {
//         reject('ERROR: Unable to add user.');
//       }
//     }, 2000);
//   });
// }
// createUser({ name: 'Brian', surname: 'Griffin' }).then(getUsers);
// Async / Await
// --- 2.1 problem solving using using Async/await (new way)
// function getUsers() {
//   setTimeout(() => {
//     let output = '';
//     users.forEach((user) => {
//       output += `
//       <ul>
//         <li>Name: ${user.name}</li>
//         <li>Surname: ${user.surname}</li>
//       </ul>
//       `;
//     });
//     usersOutput.innerHTML = output;
//   }, 1000);
// }
// getUsers();
// function createUser(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       users.push(user);
//       let failed = false;
//       if (!failed) {
//         resolve();
//       } else {
//         reject('ERROR: Unable to add user.');
//       }
//     }, 2000);
//   });
// }
// async function initialize() {
//   await createUser({ name: 'Brian', surname: 'Griffin' });
//   getUsers();
// }
// initialize();
// ---- Async / Await / Fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });
async function FetchUsersData() {
  try {
    let responsePosts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    let dataPosts = await responsePosts.json();
    console.log(dataPosts);
  } catch (error) {
    console.log(error);
  }
}
FetchUsersData();
