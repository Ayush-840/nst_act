// ─── 2 ───
 branch | total_balance |  diff_from_overall  
--------+---------------+---------------------
 Mumbai |     450200.00 | 342016.666666666667
(1 row)



// ─── 4 ───
select * from accounts;
select * from transactions;

select
branch,
sum(balance) as total_balance,
sum(balance) - (select avg(balance) from accounts) as diff_from_overall
from accounts
group by branch
having sum(balance) > 200000;