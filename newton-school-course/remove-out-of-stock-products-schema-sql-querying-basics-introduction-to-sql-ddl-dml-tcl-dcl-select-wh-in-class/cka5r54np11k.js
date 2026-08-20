DELETE FROM products
WHERE stock=0;

SELECT product_id, product_name, stock
FROM products;