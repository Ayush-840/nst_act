SELECT 
    c.customer_name AS customer_name,
    r.customer_name AS referrer_name
FROM 
    customers c
JOIN 
    customers r 
ON 
    c.referred_by = r.customer_id;