const express = require("express");
const app = express();
app.use(express.json());
let shoppingCart = [];
const MAX_ITEMS_IN_CART = 10;
function calculateTotalCost(req, res, next) {
  const { name, price, quantity } = req.body || {};
  if (typeof name !== "string" || !name.trim() || typeof price !== "number" || !Number.isFinite(price) || price <= 0
    || typeof quantity !== "number" || !Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: "Invalid item" });
  }
  req.body.totalCost = price * quantity;
  next();
}
app.post("/cart/items", calculateTotalCost, (req, res) => {
  if (shoppingCart.length >= MAX_ITEMS_IN_CART) {
    return res.status(400).json({ error: "Full" });
  }
  const { name, price, quantity, totalCost } = req.body;
  const item = { name, price, quantity, totalCost };
  shoppingCart.push(item);
  return res.status(201).json(item);
});
app.get("/cart", (req, res) => res.status(200).json(shoppingCart));
if (require.main === module) { app.listen(3000); }
module.exports = app;