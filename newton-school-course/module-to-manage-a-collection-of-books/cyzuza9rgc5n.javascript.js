if (require.main === module) {
app.post("*", validateStudent);
app.all("*", (req, res) => {
  return res.status(400).json({ status: "failed" });
});
  if (!isValidName || !isValidGpa) {
    return res.status(400).json({ status: "failed" });
  }
  return res.status(200).json({ status: "success" });
}
app.post("/", validateStudent);
function validateStudent(req, res) {
  const { name, gpa } = req.body || {};
  const isValidName = typeof name === "string" && name.trim().length > 0;
  const isValidGpa =
    typeof gpa === "number" && Number.isFinite(gpa) && gpa >= 0.0 && gpa <= 4.0;
    return res.status(400).json({ status: "failed" });
  }
  next(err);
});
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;