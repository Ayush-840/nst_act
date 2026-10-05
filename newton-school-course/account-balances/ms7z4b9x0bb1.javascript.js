SELECT 
    account_id,
    balance_date,
    balance AS current_balance,
    LEAD(balance) OVER (
        PARTITION BY account_id 
        ORDER BY balance_date
    ) AS next_balance,
    LEAD(balance) OVER (
        PARTITION BY account_id 
        ORDER BY balance_date
    ) - balance AS balance_difference
FROM 
    ACCOUNT_BALANCES
ORDER BY 
    account_id,
    balance_date;