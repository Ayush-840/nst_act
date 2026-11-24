// 1. Validation: ensure both fields are present, strings, and non-whitespace
  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    username.trim() === '' ||
    password.trim() === ''
  ) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Both username and password are required fields.',
    });
  }
  // 2. Authentication: exact match on username and password
  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );
  // 3. Response
  if (!matchedUser) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid username or password.',
    });
  }
  return res.status(200).json(matchedUser);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});