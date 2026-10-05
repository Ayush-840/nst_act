SELECT DISTINCT 
    a.account_id, 
    a.customer_name, 
    a.balance
FROM 
    ACCOUNTS a
JOIN 
    TRANSACTIONS t 
ON 
    a.account_id = t.account_id
ORDER BY 
    a.account_id;