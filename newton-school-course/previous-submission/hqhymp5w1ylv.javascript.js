});
if (require.main === module) {
  app.listen(3000);
app.post("/movies", verifyPremiumMember, validateMovie, (req, res) => {
  const newMovie = { id: watchlist.length, title: req.body.title, year: req.body.year };
  watchlist.push(newMovie);
  res.status(201).json(newMovie);
};
app.get("/movies", (req, res) => {
  res.status(200).json(watchlist);
});
  }
  if (!Number.isInteger(year) || year < 1888 || year > 2100) {
    return res.status(400).json({ error: "Invalid year" });
  }
  next();
const validateMovie = (req, res, next) => {
  const { title, year } = req.body || {};
  if (typeof title !== "string" || title.trim().length === 0) {
    return res.status(400).json({ error: "Invalid title" });
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
const verifyPremiumMember = (req, res, next) => {
  if (req.headers["x-premium-key"] !== "gold-member-2026") {
}
module.exports = app;