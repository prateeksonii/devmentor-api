const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

exports.addCommonMiddlewares = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

exports.notFoundHandler = (_req, res, next) => {
  res.status(404);
  const error = new Error('Route not found');
  return next(error);
};

// eslint-disable-next-line no-unused-vars
exports.errorHandler = (err, _req, res, _next) => {
  if (res.statusCode === 200) {
    res.status(500);
  }

  return res.json({
    ok: false,
    error: {
      message: err.message,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : {},
    },
  });
};
