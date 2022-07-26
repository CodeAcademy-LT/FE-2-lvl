// Variables
const userLogoutButtonElement = document.querySelector('#user-logout-button');
const addMovieFormElement = document.querySelector('#add-movie-form');

// Functions
const logoutUser = () => {
  // removing user id form storage
  localStorage.removeItem('user');

  // redirecting to Home page
  location.href = 'http://127.0.0.1:5500/1_frontend/index.html';
};

const addMovie = (e) => {
  e.preventDefault();

  const userId = localStorage.getItem('user');

  const movie = {
    userId,
    movie_name: e.target.movie_name.value,
    movie_category: e.target.movie_category.value,
    movie_rent_price: e.target.movie_rent_price.value,
    is_available: true,
  };

  fetch('http://localhost:5000/api/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })
    .then((response) => response.json())
    .then((data) => {
      addMovieFormElement.reset();

      getUserData();
    });
};

const getUserData = () => {
  const userId = localStorage.getItem('user');

  fetch(`http://localhost:5000/api/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Variables
      const currentUserElement = document.querySelector('#current-user');

      currentUserElement.innerText = data.name_surname;

      showUserMovies(data.movies);
      showUserOrders(data.orders);
    });
};

const showUserMovies = (moviesArray) => {
  // Variables
  const userMoviesElement = document.querySelector('#user-movies');
  userMoviesElement.innerHTML = '';

  moviesArray.forEach((movie) => {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td'); // Movie name
    const td2 = document.createElement('td'); // Movie category
    const td3 = document.createElement('td'); // Movie rent price
    const td4 = document.createElement('td'); // Movie availability

    tr.setAttribute('data-id', movie.userId);

    td1.innerText = movie.movie_name;
    td2.innerText = movie.movie_category;
    td3.innerText = movie.movie_rent_price;
    td4.innerText = movie.is_available ? 'Available' : 'Not Available';

    tr.append(td1, td2, td3, td4);

    userMoviesElement.appendChild(tr);
  });
};

const showUserOrders = (ordersArray) => {
  // Variables
  const userOrdersElement = document.querySelector('#user-orders');
  userOrdersElement.innerHTML = '';

  ordersArray.forEach((order) => {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td'); // Movie name
    const td2 = document.createElement('td'); // Movie category
    const td3 = document.createElement('td'); // Movie rent price
    const td4 = document.createElement('td'); // Movie rent term

    tr.setAttribute('data-id', order.movieId);

    td1.innerText = order.movie_name;
    td2.innerText = order.movie_category;
    td3.innerText = order.movie_rent_price;
    td4.innerText = `After ${order.return} days`;

    tr.append(td1, td2, td3, td4);

    userOrdersElement.appendChild(tr);
  });
};

// Events
userLogoutButtonElement.addEventListener('click', logoutUser);
addMovieFormElement.addEventListener('submit', addMovie);
document.addEventListener('DOMContentLoaded', getUserData);
