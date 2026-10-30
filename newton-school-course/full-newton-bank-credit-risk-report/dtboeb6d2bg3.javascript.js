SELECT 
    a.account_holder,
    a.branch,
    a.account_type,
    a.balance,
    ROUND((
        SELECT AVG(sub_a.balance)
        FROM accounts sub_a
        WHERE sub_a.branch = a.branch
    ), 2) AS branch_avg,
    ROUND(
        a.balance - (
            SELECT AVG(sub_a.balance)
            FROM accounts sub_a
            WHERE sub_a.branch = a.branch
        ), 2
    ) AS balance_diff,
    CASE 
        WHEN a.balance > 2 * (
            SELECT AVG(sub_a.balance)
            FROM accounts sub_a
            WHERE sub_a.branch = a.branch
        ) THEN 'High Value'
        ELSE 'Above Average'
    END AS risk_flag
FROM 
    accounts a
WHERE 
    a.account_status = 'Active'
    AND a.balance > (
        SELECT AVG(sub_a.balance)
        FROM accounts sub_a
        WHERE sub_a.branch = a.branch
    )
    AND EXISTS (
        SELECT 1
        FROM transactions t
        WHERE t.account_id = a.account_id
    );