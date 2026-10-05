DELETE FROM accounts
WHERE account_id NOT IN (
    SELECT MIN(account_id)
    FROM accounts
    GROUP BY account_holder, branch
);

SELECT account_id, account_holder, branch, balance
FROM accounts
ORDER BY account_holder ASC, branch ASC;