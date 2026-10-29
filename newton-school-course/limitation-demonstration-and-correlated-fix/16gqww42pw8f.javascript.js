// ─── 4 ───
-- select * from accounts;
-- select * from transactions;

select account_holder,branch,balance
from accounts a
where balance > (
    select avg(balance)
    from accounts a2
    where a.branch=a2.branch
    
)


// ─── 12 ───
 account_holder |  branch   |  balance  
----------------+-----------+-----------
 Priya Mehta    | Bangalore | 128000.00
 Ravi Kumar     | Mumbai    | 310000.00
(2 rows)