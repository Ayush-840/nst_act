}
app.get("/profile", authenticate, (req, res) => {
  res.json({ id: user.id, name: user.name, email: user.email });
});
if (require.main === module) { app.listen(3000, () => console.log("Server running on http://localhost:3000")); }
module.exports = { app };