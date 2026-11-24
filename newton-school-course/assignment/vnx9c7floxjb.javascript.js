const express = require("express");
const router = express.Router();
// Placeholder handler for GET /products
const getProducts = (req, res) => {
  res.json([]);
};
// Placeholder handler for POST /products
const createProduct = (req, res) => {
  res.send("Product added");
};
router.get("/", getProducts);
router.post("/", createProduct);
module.exports = router;