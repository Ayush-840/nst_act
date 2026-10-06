select 
order_id,
customer_name,
order_date 
from orders
where order_date between '2025-06-20' and '2025-07-20'
order by order_date desc;