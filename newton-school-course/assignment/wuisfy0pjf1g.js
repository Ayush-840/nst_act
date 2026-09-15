// Return success response if valid
  return res.status(200).json({
    message: "Validation successful",
    post: {
      title: title,
      content: content
    }
  });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = { app };