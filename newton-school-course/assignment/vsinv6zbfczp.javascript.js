const express = require('express');
const devicesRouter = require('../routes/devices.router');
const app = express();
app.use(express.json());
app.use('/api/devices', devicesRouter);
module.exports = app;