// EXTERNAL API
const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';
// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');
// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
function loadTextFileXHR() {
  // Create XHR object
  let xhr = new XMLHttpRequest();
  // OPEN - type (GET/POST) | url/file | asyc (true/false)
  xhr.open('GET', 'sample.txt', true);
  // Handling request
  xhr.onload = function () {
    if (this.status === 200) {
      textOutput.innerText = this.responseText;
    } else if (this.status === 404) {
      textOutput.innerText = 'Text not found';
    }
  };
  // Sending request
  xhr.send();
  // Erros handling
  xhr.onerror = function () {
    console.log('Request error.');
  };
}
//-- Load User Information
function loadUserXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      let user = JSON.parse(this.responseText);
      let output = `
        <ul>
          <li>ID: ${user.id}</li>
          <li>NAME: ${user.name}</li>
          <li>EMAIL: ${user.email}</li>
        </ul>
      `;
      userOutput.innerHTML = output;
    } else if (this.status === 404) {
      userOutput.innerText = 'User not found';
    }
  };
  xhr.send();
}
//-- Load Users information
function loadUsersXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);
      let output = '';
      for (let i in users) {
        output += `
          <ul>
            <li>ID: ${users[i].id}</li>
            <li>NAME: ${users[i].name}</li>
            <li>EMAIL: ${users[i].email}</li>
          </ul>
        `;
      }
      usersOutput.innerHTML = output;
    } else if (this.status === 404) {
      usersOutput.innerText = 'Users not found';
    }
  };
  xhr.send();
}
//-- Load Posts information
function loadPostsXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', JSONPLACEHOLDER_URL, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let posts = JSON.parse(this.responseText);
      console.log(posts);
      let output = '';
      for (let i in posts) {
        output += `
          <h3>${posts[i].title}</h3>
          <p>${posts[i].body}</p>
        `;
      }
      postsOutput.innerHTML = output;
    } else if (this.status === 404) {
      postsOutput.innerText = 'Posts not found';
    }
  };
  xhr.send();
}
//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  return fetch(JSONPLACEHOLDER_URL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      let posts = data;
      console.log(posts);
      let output = '';
      for (let i in posts) {
        output += `
          <h3>${posts[i].title}</h3>
          <p>${posts[i].body}</p>
        `;
      }
      postsOutput.innerHTML = output;
    })
    .catch((error) => console.log('ERROR:', error.message));
}
// -- Sending data
function sendPostFETCH() {
  return fetch(JSONPLACEHOLDER_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      userId: 1,
      title: 'MY FIRST POST REQUEST',
      body: 'CONTENT OF MY POST',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser.addEventListener('click', loadUserXHR);
btnGetUsers.addEventListener('click', loadUsersXHR);
// btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);
/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
