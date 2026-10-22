app.delete("/products/:id", async (req, res) => {
// Write your code here
});
  }
  const { id } = req.params;
  try {
    // 1. Check if the product exists
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    // 2. Delete associated entries from the cart table first (if foreign keys don't cascade)
    await prisma.cart.deleteMany({
      where: { product_id: Number(id) }
    });
    // 3. Delete the product
    await prisma.product.delete({
      where: { id: Number(id) }
    });
    // 4. Respond with 204 No Content
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create product" });
    console.error(err);
    }
      return res.status(400).json({ error: "Product name must be unique" });
      // Handle duplicate entry error
    if (err.code === "ER_DUP_ENTRY") {
  } catch (err) {
    return res.status(201).json({ id: result.insertId, name, quantity, price });