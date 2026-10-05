select 
cust_name,
round(avg(order_amount),2) as avg_order_value,
round(max(order_amount),2) as max_order_value,
case 
when round(avg(order_amount),2) > 5000 then 'gold'
when round(max(order_amount),2) > 2000 then 'silver'
else 'bronze'
end as customer_tier
from orders
where 
extract(year from order_date)=2026
group by cust_name,cust_id
having count(order_id)>2
order by 
round(avg(order_amount),2) desc