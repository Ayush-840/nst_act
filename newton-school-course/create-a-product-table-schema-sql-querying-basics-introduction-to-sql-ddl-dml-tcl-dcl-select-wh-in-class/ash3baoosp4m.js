// ─── 1 ───
CREATE TABLE MY_PRODUCTS (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(8,2),
    stock INT

);

INSERT INTO MY_PRODUCTS(product_id,product_name,price,stock) VALUES 
(101,'Laptop',55000.00,10),
(102,'Mouse',799.00,50),
(103,'Keyboard',1499.00,30),
(104,'Monitor',12000.00,15),
(105,'Printer',8500.00,8);

SELECT * FROM MY_PRODUCTS;

// ─── 5 ───
CREATE TABLE
INSERT 0 5
 product_id | product_name |  price   | stock 
------------+--------------+----------+-------
        101 | Laptop       | 55000.00 |    10
        102 | Mouse        |   799.00 |    50
        103 | Keyboard     |  1499.00 |    30
        104 | Monitor      | 12000.00 |    15
        105 | Printer      |  8500.00 |     8
(5 rows)