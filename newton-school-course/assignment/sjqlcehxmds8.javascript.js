const PORT = process.env.PORT || 3000;
app.use(cookieParser());
// 1. Set Theme: GET /theme/:name
app.get('/theme/:name', (req, res) => {
  const { name } = req.params;
  // Store in a cookie named 'theme' expiring in 1 hour (3,600,000 ms)
  res.cookie('theme', name, {
    maxAge: 3600000,
    httpOnly: true,
    sameSite: 'lax',
  });
  return res.status(200).json({
    message: 'Theme updated successfully',
    theme: name,
  });
});
// 2. Get Theme: GET /theme
app.get('/theme', (req, res) => {
  const savedTheme = req.cookies?.theme;
  return res.status(200).json({
    theme: savedTheme || 'light',
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});