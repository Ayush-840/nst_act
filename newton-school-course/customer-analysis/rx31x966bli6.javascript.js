SELECT customer_name 
FROM customers 
WHERE city = 'Mumbai'

INTERSECT

SELECT c.customer_name 
FROM customers c
JOIN accounts a ON c.customer_id = a.customer_id;