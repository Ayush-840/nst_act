select 
order_id,customer_name,order_date,amount
from orders
where 
order_date BETWEEN '2026-03-01' and '2026-03-31'
order by amount desc 
limit 5 offset 5