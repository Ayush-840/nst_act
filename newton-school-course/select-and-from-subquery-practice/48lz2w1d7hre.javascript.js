SELECT
    branch,
    total_balance,
    total_balance - (
        SELECT AVG(balance)
        FROM accounts
    ) AS diff_from_overall
FROM (
    SELECT
        branch,
        SUM(balance) AS total_balance
    FROM accounts
    GROUP BY branch
)
WHERE total_balance > 200000;