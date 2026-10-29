-- select * from accounts;
-- select * from transactions;

select
branch,
sum(balance) as total_balance,
sum(balance) - (select avg(balance) from accounts) as diff_from_overall
from accounts
group by branch
having sum(balance) > 200000;