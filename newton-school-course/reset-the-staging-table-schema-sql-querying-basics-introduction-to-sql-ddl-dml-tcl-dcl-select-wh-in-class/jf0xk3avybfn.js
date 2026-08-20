// ─── 1 ───
Truncate table staging_orders;

select order_id, customer, amount from staging_orders;

// ─── 2 ───
TRUNCATE TABLE
 order_id | customer | amount 
----------+----------+--------
(0 rows)