const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const asyncHandler = require('express-async-handler');

const connectDB = require('./config/db.js');
const generateToken = require('./config/generateToken.js');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Models
const User = require('./models/userModel.js');

// DB connection
connectDB();

// Middlewares
const protect = require('./auth/auth.js');
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// -- signup (registration)
app.post(
  '/api/users',
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // --- checking id user with given email already exixts
    const userExists = await User.findOne({ email });

    // ---- if exists, then thorowing error
    if (userExists) {
      res.status(400).send('User already exists');
      throw new Error('User already exists');
    }

    // ---- if not exists, then saving it to database ...
    const user = await User.create({ name, email, password });

    // ----- ... and then sending user data to FE
    if (user) {
      res.status(201).json({
        _id: user._id,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send('Invalid user data');
      throw new Error('Invalid user data');
    }
  })
);

// -- login (authentication)
app.post(
  '/api/users/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        _id: user._id,
        token: generateToken(user._id),
      });
    } else {
      res.status(404).send('Invalid email or password');
      throw new Error('Invalid email or password');
    }
  })
);

// -- profile (authorization)
app.get(
  '/api/users/profile',
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({ _id: user._id, name: user.name, email: user.email });
    } else {
      res.status(404).send('User not found');
      throw new Error('User not found');
    }
  })
);

// Starting server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
