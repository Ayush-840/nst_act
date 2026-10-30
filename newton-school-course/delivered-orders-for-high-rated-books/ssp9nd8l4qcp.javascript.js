-- Write your code here
select
b.book_title,
b.book_rating,
o.order_date,
d.delivery_status
from book_info b
join orders o on b.book_id = o.book_id
join deliveries d on o.order_id = d.order_id
where b.book_rating >= 4.0 and d.delivery_status='Delivered'