// Variables
const moviesContainerElement = document.querySelector('#movies-container');

// Functions
const getData = () => {
  fetch('http://localhost:5000/api/movies')
    .then((response) => response.json())
    .then((result) => showData(result))
    .catch((err) => console.log(err));
};

const showData = (moviesArray) => {
  const loggedInUserId = localStorage.getItem('user');

  console.log(moviesArray);
  moviesContainerElement.innerHTML = moviesArray
    .filter((movie) => movie.userId !== loggedInUserId)
    .reduce((total, item) => {
      const rentMovieElement = `<li><button data-id="${item.userId}" data-name="${item.movie_name}" data-category="${item.movie_category}" data-price="${item.movie_rent_price}">RENT MOVIE</button></li>`;

      total += `
    <div>
      <ul>
        <li>${item.movie_name}</li>
        <li>${item.movie_category}</li>
        <li>${item.movie_rent_price}</li>
        ${
          loggedInUserId
            ? rentMovieElement
            : `<li>Please signup/login to rent</li>`
        }
      </ul>
    </div>
    `;
      return total;
    }, '');

  const rentButtons = document.querySelectorAll('button');

  rentButtons.forEach((btn) => btn.addEventListener('click', rentMovie));
};

const rentMovie = (e) => {
  const user_id = localStorage.getItem('user');

  const movie_owner_id = e.target.dataset.id;
  const movie_name = e.target.dataset.name;
  const movie_category = e.target.dataset.category;
  const movie_rent_price = e.target.dataset.price;

  fetch(`http://localhost:5000/api/movies/${user_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie_owner_id,
      movie_name,
      movie_category,
      movie_rent_price,
    }),
  })
    .then((response) => response.json())
    .then((data) => getData());
};

// Events
document.addEventListener('DOMContentLoaded', getData);
