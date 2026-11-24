function validateUser(req, res, next) {
  const { name, age, city } = req.query;
  if (typeof name === 'string' && name.trim().length > 0 && typeof city === 'string' && city.trim().length > 0 && (typeof age === 'number' || (typeof age === 'string' && age.trim().length > 0)) && Number(age) >= 18) {
    return next();
  }
  return res.status(400).json({ error: 'Invalid input' });
}
module.exports = { validateUser };