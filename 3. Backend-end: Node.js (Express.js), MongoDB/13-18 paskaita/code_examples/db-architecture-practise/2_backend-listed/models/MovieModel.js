const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movie_name: {
    type: String,
    required: true,
  },
  movie_category: {
    type: String,
    required: true,
  },
  movie_rent_price: {
    type: String,
    required: true,
  },
  is_available: {
    type: Boolean,
    required: true,
  },
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
