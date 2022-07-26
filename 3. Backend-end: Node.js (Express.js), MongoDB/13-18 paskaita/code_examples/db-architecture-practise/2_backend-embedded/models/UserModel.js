const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name_surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  movies: {
    type: Array,
    required: true,
    default: [],
  },
  orders: {
    type: Array,
    required: true,
    default: [],
  },
});

const User = mongoose.model('user', userSchema);
module.exports = User;
