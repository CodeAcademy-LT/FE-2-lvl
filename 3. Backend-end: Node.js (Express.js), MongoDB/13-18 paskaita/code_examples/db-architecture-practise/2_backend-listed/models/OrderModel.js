const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  return: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('order', orderSchema);
module.exports = Order;
