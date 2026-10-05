SELECT 
    a.account_holder,
    a.branch,
    a.balance
FROM 
    accounts a
JOIN (
    SELECT 
        branch,
        AVG(balance) AS avg_balance
    FROM 
        accounts
    GROUP BY 
        branch
) b_avg ON a.branch = b_avg.branch
WHERE 
    a.balance > b_avg.avg_balance;