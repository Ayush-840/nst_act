SELECT 
    c.customer_name,
    a.account_type,
    a.balance
FROM customers c
JOIN accounts a ON c.customer_id = a.customer_id
ORDER BY c.customer_name ASC;