const express = require('express');
const path = require('path');
const app = express();
app.use('/client', express.static(path.join(__dirname, '..', 'client', 'build')));
module.exports = app;