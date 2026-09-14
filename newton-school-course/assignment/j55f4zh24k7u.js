const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const moviesPath = path.join(__dirname, 'db.json');
app.get("/movies/:id", (req, res) => {
 const movies = JSON.parse(fs.readFileSync(moviesPath, 'utf8'));
// Write you code here
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = { app };