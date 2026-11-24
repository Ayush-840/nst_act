const express = require('express');
const app = express();
// TODO: Register the body-parsing middleware here
app.use(express.json())
app.post('/users', (req, res) => {
  // TODO: Destructure username, email, and password from req.body
  // TODO: Build an errors array
  // TODO: Validate username (string, length > 3)
  // TODO: Validate email (contains '@')
  // TODO: Validate password (length >= 6)
  // TODO: If errors exist, return 400 with { errors }
  // TODO: Otherwise return 201 with { message: 'User created successfully' }
});
module.exports = app;