if (operation === 'divide' && numB === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  let result;
  switch (operation) {
    case 'add':
      result = numA + numB;
      break;
    case 'subtract':
      result = numA - numB;
      break;
    case 'multiply':
      result = numA * numB;
      break;
    case 'divide':
      result = numA / numB;
      break;
  }
    return res.status(400).json({ error: 'Invalid operation specified.' });
  const validOperations = ['add', 'subtract', 'multiply', 'divide'];
  if (!validOperations.includes(operation)) {
  const { operation, a, b } = req.params;
  const numA = Number(a);
  const numB = Number(b);
app.get('/calculate/:operation/:a/:b', (req, res) => {
const port = 3000;
const express = require('express');
const app = express();