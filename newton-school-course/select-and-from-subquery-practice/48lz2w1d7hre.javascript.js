SELECT 
    branch,
    SUM(balance) AS total_balance,
    SUM(balance) - (SELECT AVG(balance) FROM accounts) AS diff_from_overall
FROM accounts
GROUP BY branch
HAVING SUM(balance) > 200000;