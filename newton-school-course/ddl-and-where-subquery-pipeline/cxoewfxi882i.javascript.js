select
account_id,
account_holder,
branch,
account_type,
account_status,
balance,
opened_date 
from accounts
where account_id NOT IN(
    SELECT account_id
    FROM transactions
    WHERE account_id IS NOT NULL
);