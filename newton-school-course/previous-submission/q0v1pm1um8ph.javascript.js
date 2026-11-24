module.exports = app;
app.use('/client', express.static(path.join(__dirname, '..', 'client', 'build')));
const app = express();
const path = require('path');
const express = require('express');