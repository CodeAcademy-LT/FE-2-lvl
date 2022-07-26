const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected');
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectDB;
