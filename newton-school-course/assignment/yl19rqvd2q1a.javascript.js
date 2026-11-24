}
    next();
        return res.status(400).json({ error: "Invalid year" });
    }
        !Number.isInteger(year) ||
        year < 1888 ||
        year > 2100
    ) {
    if (
        year === undefined ||
        typeof year !== "number" ||
        return res.status(400).json({ error: "Invalid title" });
    }
    if (title === undefined || typeof title !== "string" || title.trim() === "") {
app.get("/movies", (req, res) => {
    res.status(200).json(watchlist);
});
// TODO: Connect the middleware chain below
app.post("/movies", verifyPremiumMember, validateMovie, (req, res) => {
  const newMovie = { id: watchlist.length, title: req.body.title, year: req.body.year };
  watchlist.push(newMovie);
  res.status(201).json(newMovie);
});
if (require.main === module) {
    app.listen(3000);
}
module.exports = app;