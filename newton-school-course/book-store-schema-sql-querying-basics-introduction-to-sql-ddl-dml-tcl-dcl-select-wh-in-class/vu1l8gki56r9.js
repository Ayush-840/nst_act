// ─── 1 ───
-- 1. Create the initial BOOK_STORE table
CREATE TABLE BOOK_STORE (
    book_id INT,
    book_title VARCHAR(100),
    price DECIMAL(7,2)
);

ALTER TABLE BOOK_STORE 
ADD COLUMN stock_quantity INT;


ALTER TABLE BOOK_STORE 
ALTER COLUMN book_title TYPE VARCHAR(200);


INSERT INTO BOOK_STORE (book_id, book_title, price, stock_quantity) VALUES
(201, 'The Alchemist', 499.00, 20),
(202, 'Atomic Habits', 799.00, 15),
(203, 'Rich Dad Poor Dad', 650.00, 10),
(204, 'Ikigai', 550.00, 18),
(205, 'Deep Work', 720.00, 12);

SELECT * FROM BOOK_STORE;


// ─── 5 ───
CREATE TABLE
ALTER TABLE
ALTER TABLE
INSERT 0 5
 book_id |    book_title     | price  | stock_quantity 
---------+-------------------+--------+----------------
     201 | The Alchemist     | 499.00 |             20
     202 | Atomic Habits     | 799.00 |             15
     203 | Rich Dad Poor Dad | 650.00 |             10
     204 | Ikigai            | 550.00 |             18
     205 | Deep Work         | 720.00 |             12
(5 rows)