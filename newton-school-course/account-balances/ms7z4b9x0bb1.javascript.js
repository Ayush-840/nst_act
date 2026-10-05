// ─── 2 ───
 account_id | balance_date | current_balance | next_balance | balance_difference 
------------+--------------+-----------------+--------------+--------------------
        101 | 2026-01-01   |           50000 |        52000 |               2000
        101 | 2026-01-02   |           52000 |        51000 |              -1000
        101 | 2026-01-03   |           51000 |        55000 |               4000
        101 | 2026-01-04   |           55000 |        53000 |              -2000
        101 | 2026-01-05   |           53000 |              |                   
(5 rows)



// ─── 4 ───
select 
account_id,
balance_date,
balance as current_balance,
lead(balance) over(
    partition by account_id
    -- order by account_id
)as next_balance,
lead(balance) over(
    partition by account_id
    -- order by balance_date
) - balance as balance_difference
from ACCOUNT_BALANCES
order by account_id,balance_date





// ─── 12 ───
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