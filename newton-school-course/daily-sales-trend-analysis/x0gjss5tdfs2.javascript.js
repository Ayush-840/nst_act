select
sale_date,
units_sold,
round(
    avg(units_sold) over(
        order by sale_date
        rows between 2 preceding and  current row
    ),1
)as moving_avg_3d,

sum(units_sold) over(
    order by sale_date
)as running_total,
units_sold - LAG(units_sold, 1) OVER (
        ORDER BY sale_date
    ) AS change_vs_prev_day,

round(
    units_sold - avg(units_sold) over(
        order by sale_date
        rows between 2 preceding and current row
    ),1
)as variance_vs_moving_avg
from daily_sales
order by sale_date asc;