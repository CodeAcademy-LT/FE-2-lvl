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
const Movie = require('./models/MovieModel.js');
const Order = require('./models/OrderModel.js');

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
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});

  const newMovies = [...movies]
    .map((movie) => {
      const newMovie = movie.toObject();

      newMovie.userId = newMovie.user_id;
      delete newMovie.user_id;

      return newMovie;
    })
    .filter((movie) => movie.is_available);

  res.json(newMovies);
});

// GET /api/users/:id      |   User information
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  const user = await User.findOne({ _id: userId });
  const allMovies = await Movie.find({});
  const movies = await Movie.find({ user_id: userId });
  const orders = await Order.find({ user_id: userId });

  const ordersWithMoviesData = [...orders].reduce((total, order) => {
    let newOrder;

    allMovies.forEach((movie) => {
      if ('' + movie._id === '' + order.movie_id) {
        newOrder = { ...order.toObject(), ...movie.toObject() };
      }
    });

    total.push(newOrder);
    return total;
  }, []);

  const userWithMoviesAndorders = {
    ...user.toObject(),
    movies,
    orders: ordersWithMoviesData,
  };

  res.json(userWithMoviesAndorders);
});

// POST /api/users/login   |   User login (for existing users)
app.post('/api/users/login', async (req, res) => {
  const userData = req.body;

  const user = await User.findOne(userData);

  res.json(user);
});

// POST /api/users/signup  |   User signup (for new users)
app.post('/api/users/signup', async (req, res) => {
  const newUser = req.body;

  // Before saving user, we need to check if user isn't existing

  const user = new User(newUser);
  const savedUser = await user.save();

  res.json(savedUser);
});

// POST /api/movies        |   Adding new movies
app.post('/api/movies', async (req, res) => {
  const movieData = req.body;

  const { userId, movie_name, movie_category, movie_rent_price, is_available } =
    movieData;

  const newMovie = {
    user_id: userId,
    movie_name,
    movie_category,
    movie_rent_price,
    is_available,
  };

  const movie = new Movie(newMovie);

  const savedMovie = await movie.save();

  res.json({ status: 'Movie saved' });
});

// PUT /api/movies/:id | Updates User and movies
app.put('/api/movies/:id', async (req, res) => {
  const userId = req.params.id;
  const orderData = req.body;

  const movie = await Movie.findOne({
    user_id: orderData.movie_owner_id,
    movie_name: orderData.movie_name,
  });

  await Movie.findByIdAndUpdate(movie._id, { is_available: false });

  const newOrder = {
    movie_id: movie._id,
    user_id: userId,
    return: 30,
  };

  const order = new Order(newOrder);

  await order.save();

  res.json({ status: 'Order completed' });
});
