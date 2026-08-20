// ─── 1 ───
begin;
update products set stock=stock-1 where product_name='Laptop';
commit;
select*from products

// ─── 5 ───
BEGIN
UPDATE 1
COMMIT
 product_id | product_name | stock | price 
------------+--------------+-------+-------
          2 | Mouse        |    40 |   800
          3 | Keyboard     |    25 |  1500
          1 | Laptop       |    14 | 55000
(3 rows)