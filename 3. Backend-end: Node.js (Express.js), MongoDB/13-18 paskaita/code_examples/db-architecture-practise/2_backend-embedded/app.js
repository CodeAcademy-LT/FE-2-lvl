const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Data models
const User = require('./models/UserModel.js');

// Middlewares
app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Starting server
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((err) => console.log(err));

// Routes
// GET /api/movies         |   All movies
app.get('/api/movies', (req, res) => {
  User.find({})
    .then((result) => {
      const moviesArray = result.reduce((total, item) => {
        item.movies.forEach((movie) => {
          if (movie.is_available) total.push(movie);
        });

        return total;
      }, []);

      res.json(moviesArray);
    })
    .catch((err) => console.log(err));
});

// GET /api/users/:id      |   User information
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findOne({ _id: userId })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// POST /api/users/login   |   User login (for existing users)
app.post('/api/users/login', (req, res) => {
  const userData = req.body;

  User.findOne(userData)
    .then((result) => res.json(result))
    .catch((err) => err.json(err));
});

// POST /api/users/signup  |   User signup (for new users)
app.post('/api/users/signup', (req, res) => {
  const newUserData = req.body;

  const user = new User(newUserData);

  user
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// POST /api/movies        |   Adding new movies
app.post('/api/movies', (req, res) => {
  const movieData = req.body;

  User.findOne({ _id: movieData.userId })
    .then((result) => {
      const currentMovies = result.movies;

      User.findOneAndUpdate(
        { _id: movieData.userId },
        { movies: [...currentMovies, movieData] }
      )
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
    })
    .then((err) => console.log(err));
});

// PUT /api/movies/:id | Updates User and movies
app.put('/api/movies/:id', (req, res) => {
  const userId = req.params.id;

  const order = {
    ...req.body,
    return: 30,
  };

  // Updating user which rents a movie order status
  User.findOne({ _id: userId })
    .then((result) => {
      const currentOrders = result.orders;

      User.findOneAndUpdate(
        { _id: userId },
        { orders: [...currentOrders, order] }
      )
        .then((result) => {
          // Updating user whos movie is rented movie status
          User.findOne({ _id: order.movie_owner_id }).then((result) => {
            const updatedUserMovies = result.movies.map((movie) => {
              if (movie.movie_name === order.movie_name) {
                movie.is_available = false;
              }

              return movie;
            });

            User.findOneAndUpdate(
              { _id: order.movie_owner_id },
              { movies: updatedUserMovies }
            ).then((result) => res.json(result));
          });
        })
        .then((err) => console.log(err));
    })
    .then((err) => console.log(err));
});
