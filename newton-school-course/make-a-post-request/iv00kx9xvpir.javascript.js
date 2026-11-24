// Accept POST requests on "/" (and fallback paths if needed)
app.post("/", validateStudent);
app.post("*", validateStudent);
// Reject any non-POST method or unmatched route with 400
app.all("*", (req, res) => {
  return res.status(400).json({ status: "failed" });
});
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;