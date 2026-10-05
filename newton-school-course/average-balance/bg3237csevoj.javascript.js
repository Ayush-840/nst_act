SELECT 
    account_id,
    customer_name,
    branch,
    balance
FROM 
    ACCOUNTS a1
WHERE 
    balance > (
        SELECT AVG(balance)
        FROM ACCOUNTS a2
        WHERE a2.branch = a1.branch
    );