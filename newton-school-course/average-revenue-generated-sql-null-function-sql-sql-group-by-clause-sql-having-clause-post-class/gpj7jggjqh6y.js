select 
book_title, sum(quantity_sold) as total_quantity_sold, 
round(sum(total_revenue) / sum(quantity_sold), 2) as average_revenue_per_book
from book_sales 
group by book_title 
having total_quantity_sold > 50 and average_revenue_per_book > 15
order by average_revenue_per_book desc;