// 3. Delete the product
    await pool.query("DELETE FROM products WHERE id = ?", [id]);
    // 4. Respond with 204 No Content
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete product" });
  }
    await pool.query("DELETE FROM cart WHERE product_id = ?", [id]);
    // 2. Delete associated entries from the cart table first
    }
      return res.status(404).json({ error: "Product not found" });
    if (products.length === 0) {
    const [products] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
    // 1. Check if the product exists
  try {
  const { id } = req.params;
app.delete("/products/:id", async (req, res) => {
// Write your code here
});
  }
    return res.status(500).json({ error: "Failed to create product" });
    }
    console.error(err);
});
pool
  .getConnection()
  .then(() => {
    console.log("db connected");
  })
  .then(createProducts)
  .then(() => {