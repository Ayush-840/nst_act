select 
customer_name, 
annual_spending,
case
    WHEN 
       annual_spending < 20000 then 'Silver' 
    WHEN annual_spending between 20000 and 50000 then 'Gold'
    else 'Platinum'
    end as membership_tier 
from CUSTOMER_SPENDING;

select
case
    WHEN 
       annual_spending < 20000 then 'Silver' 
    WHEN annual_spending between 20000 and 50000 then 'Gold'
    else 'Platinum'
    end as membership_tier,
    count(*) as customer_count
from CUSTOMER_SPENDING
group by membership_tier
order by customer_count desc;