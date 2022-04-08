const express = require('express');
const router = require('./api/v1/routes');
const {
  addCommonMiddlewares,
  notFoundHandler,
  errorHandler,
} = require('./middlewares');

const app = express();

addCommonMiddlewares(app);

app.use('/api/v1', router);

app.all('*', notFoundHandler);
app.use(errorHandler);

module.exports = app;
