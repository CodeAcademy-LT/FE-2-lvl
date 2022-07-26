const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
