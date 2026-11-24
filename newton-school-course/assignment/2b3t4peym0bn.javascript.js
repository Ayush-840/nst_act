const express = require('express');
const app = express();
// TODO: Register the built-in JSON parsing middleware here
app.use(express.json());
app.post('/data', (req, res) => {
  res.json({ received: req.body });
});
module.exports = app;