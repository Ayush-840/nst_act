SELECT 
    branch, 
    ROUND(avg_balance, 2) AS avg_balance
FROM (
    SELECT 
        branch, 
        AVG(balance) AS avg_balance
    FROM ACCOUNTS
    GROUP BY branch
) AS branch_averages
WHERE avg_balance > 60000;