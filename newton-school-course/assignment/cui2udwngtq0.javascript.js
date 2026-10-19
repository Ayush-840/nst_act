const express = require('express');
const loggingMiddleware = require('./middleware');
const app = express();
// TODO: Register loggingMiddleware with app.use() here
app.use(loggingMiddleware)
app.get('/', (req, res) => {
  res.send('Hello World');
});
module.exports = app;