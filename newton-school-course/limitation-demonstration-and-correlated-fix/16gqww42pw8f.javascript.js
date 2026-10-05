SELECT 
    account_holder, 
    branch, 
    balance
FROM 
    accounts a1
WHERE 
    balance > (
        SELECT AVG(balance) 
        FROM accounts a2 
        WHERE a2.branch = a1.branch
    );