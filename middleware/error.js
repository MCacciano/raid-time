const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongosee bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(`Resource not found with the id of ${err.value}`, 404);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(({ message }) => message);
    error = new ErrorResponse(message, 400);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error = new ErrorResponse(`Duplicate field value entered`, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};

module.exports = errorHandler;
