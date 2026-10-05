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