const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select(
        '-name -email -password -createdAt -updatedAt'
      );

      next();
    } catch (error) {
      res.status(401).send('Not authorized');
      throw new Error('Not authorized');
    }
  }

  if (!token) {
    res.status(401).send('Not authorized');
    throw new Error('Not authorized');
  }
});

module.exports = protect;
