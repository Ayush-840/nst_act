const { pool } = require("../db/config.js");
const createProducts = () =>
  pool.query(`CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL
);
`);
const createCart = () =>
  pool.query(`CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
`);
module.exports = { createProducts, createCart };