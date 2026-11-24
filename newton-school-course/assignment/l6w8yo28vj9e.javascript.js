const express = require('express');
const app = express();
app.use((req, res, next) => {
  req.receivedAt = Date.now();
  next();
});
app.get('/ping', (req, res) => {
  res.json({ receivedAt: req.receivedAt });
});
module.exports = app;