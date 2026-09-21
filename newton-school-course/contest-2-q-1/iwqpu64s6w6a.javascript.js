SELECT customer_id, customer_name
FROM customers
WHERE length(trim(customer_name)) > 10