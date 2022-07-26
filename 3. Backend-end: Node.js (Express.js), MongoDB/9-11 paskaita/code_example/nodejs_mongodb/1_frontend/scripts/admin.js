// Variables
const addMovieFormElement = document.querySelector('#add-movie-form');
const formSubmitMessageElement = document.querySelector('#form-submit-message');

const movieListContainerElement = document.querySelector(
  '#movie-list-container'
);
const movieUpdateMessageElement = document.querySelector(
  '#movie-update-message'
);

// Funtions
const addMovie = (e) => {
  e.preventDefault();

  const movie = {
    name: e.target.movieName.value,
    category: e.target.movieCategory.value,
    rentPrice: +e.target.movieRentPrice.value,
  };

  return fetch('http://localhost:5000/api/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })
    .then((response) => response.json())
    .then((data) => {
      formSubmitMessageElement.innerText = data.message;
      formSubmitMessageElement.classList.add('message');

      addMovieFormElement.reset();
      getAllMovies();
    });
};

const getAllMovies = () => {
  return fetch('http://localhost:5000/api/movies')
    .then((response) => response.json())
    .then((data) => showMovies(data));
};

const showMovies = (moviesArray) => {
  let tableBodyRows = moviesArray.reduce((total, item) => {
    total += `
    <tr id="${item._id}">
      <td id="movie-name" contenteditable="true" title="Click here to edit name">${item.name}</td>
      <td id="movie-category" contenteditable="true" title="Click here to edit category">${item.category}</td>
      <td id="movie-rent-price" contenteditable="true" title="Click here to edit price">${item.rentPrice}</td>
      <td><button class="btn-secondary btn-update" data-movie-id="${item._id}">Update</button></td>
      <td><button class="btn-secondary btn-delete" data-movie-id="${item._id}">Delete</button></td>
    </tr>
    `;

    return total;
  }, '');

  movieListContainerElement.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Name <i class="fas fa-info-circle" title="Click on movie name to edit"></i></th>
        <th>Categroy <i class="fas fa-info-circle" title="Click on movie category to edit"></i></th>
        <th>Rent Price <i class="fas fa-info-circle" title="Click on movie rent price to edit"></i></th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      ${tableBodyRows}
    </tbody>
  </table>
  `;

  const btnsUpdate = document.querySelectorAll('.btn-update');
  btnsUpdate.forEach((btn) => btn.addEventListener('click', updateMovie));

  const btnsDelete = document.querySelectorAll('.btn-delete');
  btnsDelete.forEach((btn) => btn.addEventListener('click', deleteMovie));
};

const updateMovie = (e) => {
  const movieId = e.target.dataset.movieId;

  const trs = document.querySelectorAll('tr');

  const trToUpdate = Array.from(trs).filter((tr) => tr.id === movieId)[0];

  const updatedMovie = {
    name: trToUpdate.children[0].innerText,
    category: trToUpdate.children[1].innerText,
    rentPrice: trToUpdate.children[2].innerText,
  };

  fetch(`http://localhost:5000/api/movies/${movieId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedMovie),
  })
    .then((response) => response.json())
    .then((data) => {
      movieUpdateMessageElement.innerText = data.message;
      movieUpdateMessageElement.classList.add('message');
    });
};

const deleteMovie = (e) => {
  const movieId = e.target.dataset.movieId;

  fetch(`http://localhost:5000/api/movies/${movieId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      movieUpdateMessageElement.innerText = data.message;
      movieUpdateMessageElement.classList.add('message');

      getAllMovies();
    });
};

// Events
addMovieFormElement.addEventListener('submit', addMovie);
document.addEventListener('DOMContentLoaded', getAllMovies);
