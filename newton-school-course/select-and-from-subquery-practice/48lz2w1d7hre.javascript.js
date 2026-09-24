// ─── 1 ───
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

// ─── 2 ───
 branch | total_balance |  diff_from_overall  
--------+---------------+---------------------
 Mumbai |     450200.00 | 342016.666666666667
(1 row)