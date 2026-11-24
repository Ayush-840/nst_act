const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  if (req.body && typeof req.body.pricePerItem === 'number' && typeof req.body.quantity === 'number') {
    req.body.calculatedTotal = req.body.pricePerItem * req.body.quantity;
  }
  next();
});
app.post('/orders', (req, res) => {
  res.status(200).json(req.body);
});
module.exports = app;