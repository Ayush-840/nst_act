res.cookie('theme', name, {
    maxAge: 1 * 60 * 60 * 1000, 
    httpOnly: true,
    path: '/'
  });
  res.json({
    "message": "Theme updated successfully",
    "theme": name
  });
});
// Task 2: Get Theme
app.get("/theme", (req, res) => {
  const savedTheme = req.cookies.theme;
  if (savedTheme) {
    res.json({
      "theme": savedTheme
    });
  } else {
    res.json({
      "theme": "light"
    });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;