-- Write your code here
select
p.product_name,
sum(od.quantity) as total_quantity_sold
from Products p
join 
Order_Details od 
on p.product_id=od.product_id
group by
p.product_id,
p.product_name
order by 
total_quantity_sold desc