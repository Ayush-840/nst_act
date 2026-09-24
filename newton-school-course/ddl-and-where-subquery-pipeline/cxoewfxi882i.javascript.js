// ─── 1 ───
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


// ─── 2 ───
 account_id | account_holder | branch | account_type | account_status | balance | opened_date 
------------+----------------+--------+--------------+----------------+---------+-------------
          4 | Sneha Iyer     | Delhi  | Savings      | Inactive       | 8900.00 | 2024-02-14
(1 row)