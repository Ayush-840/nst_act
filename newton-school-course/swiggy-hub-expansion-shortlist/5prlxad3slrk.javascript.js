// ─── 4 ───
select distinct upper(city) as city
from orders
where city is not NULL
order by city asc


// ─── 9 ───
  city  
--------
 NAGPUR
 PUNE
(2 rows)