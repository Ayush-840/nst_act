});
if (require.main === module) {
  app.listen(3000);
  watchlist.push(newMovie);
  res.status(201).json(newMovie);
}
module.exports = app;