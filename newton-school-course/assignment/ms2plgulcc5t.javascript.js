return res.status(500).json({ error: "Failed to delete product" });
  }
});
pool
  .getConnection()
  .then(() => {
    console.log("db connected");
  })
  .then(createProducts)
  .then(() => {
    console.log("products table created");
  })
  .then(createCart)
  .then(() => {
    console.log("cart table created");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      serverStatus.emit("accepting api calls");
    });
  }).catch((err) => console.log(err));
module.exports = { app, serverStatus };