// ─── 2 ───
 account_id | balance_date | closing_balance | moving_avg_balance 
------------+--------------+-----------------+--------------------
        101 | 2026-01-01   |           50000 |           50000.00
        101 | 2026-01-02   |           52000 |           51000.00
        101 | 2026-01-03   |           51000 |           51000.00
        101 | 2026-01-04   |           55000 |           52666.67
        101 | 2026-01-05   |           57000 |           54333.33
(5 rows)



// ─── 4 ───
select 
account_id,
balance_date,
closing_balance,
round(avg(closing_balance) over(
    order by balance_date
    rows between 2 preceding and current row
),2)as moving_avg_balance
from ACCOUNT_BALANCE_HISTORY

// ─── 15 ───
select 
account_id,
balance_date,
closing_balance,
round(
    avg(closing_balance) over(
        -- partition by account_id
        order by balance_date
        ROWS between 2 preceding and current row
    ),2
)as moving_avg_balance
from ACCOUNT_BALANCE_HISTORY