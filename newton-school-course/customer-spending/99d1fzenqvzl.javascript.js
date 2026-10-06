// ─── 4 ───
select
customer_name,
annual_spending,
case 
   WHEN annual_spending < 20000 then 'Silver'
   WHEN annual_spending BETWEEN 20000 and 50000 then 'Gold'
   else 'Platinum'
end as membership_tier
from CUSTOMER_SPENDING;

select
case 
   WHEN annual_spending < 20000 then 'Silver'
   WHEN annual_spending BETWEEN 20000 and 50000 then 'Gold'
   else 'Platinum'
end as membership_tier,
count(customer_name) as customer_count
from CUSTOMER_SPENDING
group by membership_tier
order by customer_count desc


// ─── 11 ───
 customer_name | annual_spending | membership_tier 
---------------+-----------------+-----------------
 Aarav         |           12000 | Silver
 Diya          |           45000 | Gold
 Vivaan        |           18000 | Silver
 Ananya        |           75000 | Platinum
 Ishaan        |           30000 | Gold
 Rohan         |           85000 | Platinum
(6 rows)

 membership_tier | customer_count 
-----------------+----------------
 Silver          |              2
 Platinum        |              2
 Gold            |              2
(3 rows)



// ─── 12 ───
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