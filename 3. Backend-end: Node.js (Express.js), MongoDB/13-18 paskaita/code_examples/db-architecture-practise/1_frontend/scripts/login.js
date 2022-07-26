// Variables
const signupFormElement = document.querySelector('#signup-form');
const loginFormElement = document.querySelector('#login-form');

// Funtions
const signupUser = (e) => {
  e.preventDefault();

  const user = {
    name_surname: e.target.signup_name_surname.value,
    email: e.target.signup_email.value,
    password: e.target.signup_password.value,
  };

  fetch('http://localhost:5000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('user', data._id);

      location.href = 'http://127.0.0.1:5500/1_frontend/pages/my-account.html';
    })
    .catch((err) => console.log(err));
};

const loginUser = (e) => {
  e.preventDefault();

  const user = {
    email: e.target.login_email.value,
    password: e.target.login_password.value,
  };

  fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('user', data._id);

      location.href = 'http://127.0.0.1:5500/1_frontend/pages/my-account.html';
    })
    .catch((err) => console.log(err));
};

// Events
signupFormElement.addEventListener('submit', signupUser);
loginFormElement.addEventListener('submit', loginUser);
