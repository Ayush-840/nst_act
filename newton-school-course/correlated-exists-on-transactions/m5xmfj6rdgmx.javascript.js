select * from accounts;
select * from transactions;

select
account_holder,
branch,
balance
from 
accounts a
where balance EXISTS(

)