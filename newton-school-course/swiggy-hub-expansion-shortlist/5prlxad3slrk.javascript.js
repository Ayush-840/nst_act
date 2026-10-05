-- Write your query below. End it with a semicolon.

select distinct(upper(city)) as city from orders
where city is not null
order by city asc;