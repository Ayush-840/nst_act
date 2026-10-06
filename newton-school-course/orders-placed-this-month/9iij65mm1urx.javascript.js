select 
order_id,
customer_name,
order_date
from orders
where order_date between '2025-07-01' and '2025-07-31'
order by order_date;