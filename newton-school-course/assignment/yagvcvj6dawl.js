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
  return res.status(200).json({ result });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = { app };