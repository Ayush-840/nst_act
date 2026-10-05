-- Query 1: Balance filter in the ON clause (Analyst A)
SELECT 
    c.customer_name, 
    a.account_id, 
    a.balance 
FROM 
    CUSTOMERS c
LEFT JOIN 
    ACCOUNTS a 
    ON c.customer_id = a.customer_id 
    AND a.balance > 50000;

-- Query 2: Balance filter in the WHERE clause (Analyst B)
SELECT 
    c.customer_name, 
    a.account_id, 
    a.balance 
FROM 
    CUSTOMERS c
LEFT JOIN 
    ACCOUNTS a 
    ON c.customer_id = a.customer_id
WHERE 
    a.balance > 50000;