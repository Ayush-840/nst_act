// ─── 2 ───
 account_id | account_holder |  branch   | account_type | account_status |  balance  | opened_date 
------------+----------------+-----------+--------------+----------------+-----------+-------------
          1 | Amit Sharma    | Mumbai    | Savings      | Active         |  45200.00 | 2023-01-10
          2 | Priya Mehta    | Bangalore | Current      | Active         | 128000.00 | 2022-11-05
          3 | Ravi Kumar     | Mumbai    | Premium      | Active         | 310000.00 | 2022-05-18
          4 | Sneha Iyer     | Delhi     | Savings      | Inactive       |   8900.00 | 2024-02-14
          5 | Karan Patel    | Bangalore | Savings      | Active         |  62000.00 | 2022-09-21
          6 | Divya Nair     | Mumbai    | Current      | Active         |  95000.00 | 2023-07-30
(6 rows)

 txn_id | account_id | txn_amount | txn_type |  txn_date  
--------+------------+------------+----------+------------
    101 |          1 |    5000.00 | Credit   | 2024-03-01
    102 |          1 |   12000.00 | Debit    | 2024-03-05
    103 |          2 |   30000.00 | Credit   | 2024-03-02
    104 |          3 |   80000.00 | Credit   | 2024-03-03
    105 |          3 |   15000.00 | Debit    | 2024-03-07
    106 |          5 |    8000.00 | Debit    | 2024-03-04
    107 |          5 |   22000.00 | Credit   | 2024-03-06
    108 |          6 |   45000.00 | Credit   | 2024-03-08
(8 rows)

 account_id | account_holder | branch | account_type | account_status | balance | opened_date 
------------+----------------+--------+--------------+----------------+---------+-------------
          4 | Sneha Iyer     | Delhi  | Savings      | Inactive       | 8900.00 | 2024-02-14
(1 row)



// ─── 4 ───
-- select * from accounts;
-- select * from transactions;


select
account_id,
account_holder,
branch,
account_type,
account_status,
balance,
opened_date
from accounts
where account_id not in(
    select account_id from transactions
    where account_id is not NULL
)