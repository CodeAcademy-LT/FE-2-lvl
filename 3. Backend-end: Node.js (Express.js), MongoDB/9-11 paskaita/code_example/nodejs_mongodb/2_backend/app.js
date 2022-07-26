const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const Movie = require('./models/movie.model.js');

// Middlewares
app.use(express.json());
app.use(cors());

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log('Connected to mongoDB');

    // Starting server
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
  })
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// GET
// -- get all movies
app.get('/api/movies', (req, res) => {
  Movie.find({}).then((data) => res.json(data));
});

// POST
// -- add new movie
app.post('/api/movies', (req, res) => {
  const movieData = req.body; // movie data from frontend

  // saving new movie to Movie model
  const movie = new Movie(movieData);

  movie
    .save()
    .then((result) => res.send({ message: 'Movie saved' }))
    .catch((err) => res.send({ message: 'Movie not saved, try again latter' }));
});

// PUT
// -- update single movie
app.put('/api/movies/:id', (req, res) => {
  const movieId = req.params.id;
  const updatedMovie = req.body;

  Movie.findByIdAndUpdate(movieId, updatedMovie)
    .then((result) => res.json({ message: 'Movie updated' }))
    .catch((err) =>
      res.json({ message: 'Movie not updated, try again later' })
    );
});

// DELETE
// -- delete single movie
app.delete('/api/movies/:id', (req, res) => {
  const movieId = req.params.id;

  Movie.findByIdAndDelete(movieId)
    .then((result) => res.json({ message: 'Movie deleted' }))
    .catch((err) =>
      res.send({ message: 'Movie not deleted, try again later' })
    );
});
