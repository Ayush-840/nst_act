// ─── 9 ───
  city  
--------
 NAGPUR
 PUNE
(2 rows)



// ─── 10 ───
-- Write your query below. End it with a semicolon.
select distinct upper(city) as city
from orders
where city is not NULL
order by city asc