const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// config
dotenv.config({ path: 'config/.env' });

// connect mongoDB
connectDB();

// import routers
const mountRouter = require('./routes/mounts');

// init app
const app = express();

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/funkos', funkoRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`.green.bold
  )
);

// handle unhandled rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  // closer server & exit process with failure
  server.close(() => process.exit(1));
});
