SELECT 
    account_holder,
    opened_date,
    balance,
    LAG(balance, 1, 0) OVER (ORDER BY opened_date) AS prev_balance,
    LEAD(balance, 1) OVER (ORDER BY opened_date) AS next_balance,
    balance - LAG(balance, 1, 0) OVER (ORDER BY opened_date) AS balance_change
FROM 
    accounts
ORDER BY 
    opened_date;