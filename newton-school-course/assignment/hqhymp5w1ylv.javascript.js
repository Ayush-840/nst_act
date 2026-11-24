if (!isValidTitle || !isValidYear) {
    return res.status(400).json({
      error: "Invalid movie data: title must be a non-empty string and year must be an integer between 1888 and 2100",
    });
  }
  return next();
}
// GET /movies - publicly accessible
app.get("/movies", (req, res) => {
  return res.status(200).json(watchlist);
});
// POST /movies - restricted to premium members with body validation
app.post("/movies", verifyPremiumMember, validateMovie, (req, res) => {
  const { title, year } = req.body;
  const newMovie = {
    id: nextId++,
    title: title.trim(),
    year,
  };
  watchlist.push(newMovie);
  return res.status(201).json(newMovie);
});
app.listen(PORT, () => {
  console.log(`Movie Watchlist API listening on port ${PORT}`);
});
module.exports = app;