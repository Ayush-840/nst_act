select 
outlet,
sale_date,
revenue,
round(
    avg(revenue) over(
        partition by outlet
        order by sale_date
        rows between 2 PRECEDING and current row 
    ),2
)as rolling_avg_revenue
from outlet_sales
order by
outlet,
sale_date;