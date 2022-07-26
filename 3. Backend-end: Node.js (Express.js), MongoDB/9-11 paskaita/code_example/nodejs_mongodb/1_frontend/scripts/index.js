// Variables
const moviesContainerElement = document.querySelector('#movies-container');
const moviesFilterByCategoryElement = document.querySelector(
  '#movies-filter-by-category'
);
const moviesFilterByPriceElement = document.querySelector(
  '#movies-filter-by-price'
);

let movies = [];
let selectedCategory;

// Funtions
// -- get movies data
const getAllMovies = () => {
  fetch('http://localhost:5000/api/movies')
    .then((response) => response.json())
    .then((data) => {
      showMovies(data);
      createOptionsTags(data);

      movies.push(...data);
    });
};

// -- create <options> for <select>
const createOptionsTags = (moviesArray, filterType = null) => {
  // For category filter
  if (filterType === null) {
    // reseting filter
    if (filterType === 'price') moviesFilterByCategoryElement.innerHTML = '';

    const categoriesArray = moviesArray.reduce((total, item) => {
      total.push(item.category);

      return total;
    }, []);

    const uniqueCategories = new Set(categoriesArray);

    // -- creating default "All movies" option
    const allMoviesOption = document.createElement('option');
    allMoviesOption.setAttribute('value', 'all-movies');
    allMoviesOption.innerText = 'All movies';
    moviesFilterByCategoryElement.appendChild(allMoviesOption);

    // -- creating other options based on uniqueCategories
    uniqueCategories.forEach((category) => {
      const option = document.createElement('option');
      option.setAttribute('value', category.toLowerCase());
      option.innerText = category;

      moviesFilterByCategoryElement.appendChild(option);
    });
  }

  // For price filter
  if (filterType === null || filterType === 'category') {
    // reseting filter
    if (filterType === 'category') moviesFilterByPriceElement.innerHTML = '';

    const pricesArray = moviesArray
      .reduce((total, item) => {
        total.push(item.rentPrice);

        return total;
      }, [])
      .sort((a, b) => a - b);

    const uniquePrices = new Set(pricesArray);

    // -- creating default "All prices" option
    const allPricesOption = document.createElement('option');
    allPricesOption.setAttribute('value', 'all-prices');
    allPricesOption.innerText = 'All prices';
    moviesFilterByPriceElement.appendChild(allPricesOption);

    // -- creating other options based on uniquePrices
    uniquePrices.forEach((price) => {
      const option = document.createElement('option');
      option.setAttribute('value', price);
      option.innerText = `${price.toFixed(2)}€`;

      moviesFilterByPriceElement.appendChild(option);
    });
  }
};

// -- show movies
const showMovies = (moviesArray) => {
  moviesContainerElement.innerHTML = moviesArray.reduce((total, item) => {
    total += `
    <div>
      <h4>${item.name}</h4>
      <p>Category: ${item.category}</p>
      <p>Rent price: ${item.rentPrice.toFixed(2)}&euro;</p>
    </div>
    `;

    return total;
  }, '');
};

// -- filter movies
// --- by category
const filterMoviesByCategory = (e) => {
  // -- filtering
  const currentCategory = e.target.value;
  selectedCategory = currentCategory;

  if (currentCategory === 'all-movies') {
    showMovies(movies);
    createOptionsTags(movies, 'category');

    return;
  }

  let filteredMovies = movies.filter(
    (movie) => movie.category.toLowerCase() === currentCategory
  );

  showMovies(filteredMovies);

  // -- update movies filters options
  createOptionsTags(filteredMovies, 'category');
};

// --- by price
const filterMoviesByPrice = (e) => {
  // -- filtering
  const currentPrice = e.target.value;

  if (currentPrice === 'all-prices' && selectedCategory === 'all-movies') {
    showMovies(movies);

    return;
  } else if (currentPrice === 'all-prices') {
    let filteredMovies = movies.filter(
      (movie) => movie.category.toLowerCase() === selectedCategory
    );

    showMovies(filteredMovies);

    return;
  }

  let filteredMovies;

  if (selectedCategory && selectedCategory !== 'all-movies') {
    filteredMovies = movies.filter(
      (movie) =>
        movie.rentPrice === +currentPrice &&
        movie.category.toLowerCase() === selectedCategory
    );
  } else {
    filteredMovies = movies.filter(
      (movie) => movie.rentPrice === +currentPrice
    );
  }

  showMovies(filteredMovies);
};

// Events
document.addEventListener('DOMContentLoaded', getAllMovies);
moviesFilterByCategoryElement.addEventListener(
  'change',
  filterMoviesByCategory
);
moviesFilterByPriceElement.addEventListener('change', filterMoviesByPrice);
