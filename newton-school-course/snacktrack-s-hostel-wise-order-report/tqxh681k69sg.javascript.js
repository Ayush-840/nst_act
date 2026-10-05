--correct the query 
SELECT
COALESCE(hostel_block,'Unassigned') as hostel_block,
count(order_id) as order_count,
round(avg(amount),2) AS avg_order_value 
FROM hostel_orders
WHERE 
lower(status) ='delivered' 
GROUP BY
COALESCE(hostel_block,'Unassigned')
 HAVING
  AVG(amount) > 150 
 ORDER BY avg_order_value desc;