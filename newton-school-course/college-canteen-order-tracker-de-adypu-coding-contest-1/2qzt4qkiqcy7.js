// ─── 19 ───
CREATE TABLE MenuItems (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(30),
    price DECIMAL(6,2),
    units_sold_today INT
);

INSERT INTO MenuItems (item_name, category, price, units_sold_today) VALUES
('Veg Sandwich', 'Snacks', 45.00, 32),
('Masala Chai', 'Beverages', 15.00, 78),
('Paneer Roll', 'Meals', 70.00, 25),
('Cold Coffee', 'Beverages', 40.00, 50),
('Chicken Biryani', 'Meals', 120.00, 18);

SELECT item_name, category, units_sold_today 
FROM MenuItems;

// ─── 20 ───
CREATE TABLE
INSERT 0 5
    item_name    | category  | units_sold_today 
-----------------+-----------+------------------
 Veg Sandwich    | Snacks    |               32
 Masala Chai     | Beverages |               78
 Paneer Roll     | Meals     |               25
 Cold Coffee     | Beverages |               50
 Chicken Biryani | Meals     |               18
(5 rows)