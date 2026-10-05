SELECT 
    account_holder,
    opened_date,
    balance,
    SUM(balance) OVER (ORDER BY opened_date ASC) AS running_total
FROM 
    accounts
ORDER BY 
    opened_date ASC;