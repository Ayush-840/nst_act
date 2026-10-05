SELECT 
    c.customer_id,
    c.name,
    o.order_id,
    o.order_date
FROM 
    customers c
FULL OUTER JOIN 
    orders o ON c.customer_id = o.customer_id
ORDER BY 
    c.customer_id ASC,
    o.order_date ASC;