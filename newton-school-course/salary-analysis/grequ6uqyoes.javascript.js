// ─── 4 ───
-- Hint:
-- Use GROUP BY and HAVING.
-- Apply conditions on aggregate values.
select department ,
count(*) as employee_count,
round(avg(salary),2) as average_salary,
max(salary) as maximum_salary,
min(salary) as minimum_salary
from employees
-- where 
GROUP by department
having count(*)>=3 and avg(salary) > 60000
order by average_salary desc


// ─── 7 ───
 department | employee_count | average_salary | maximum_salary | minimum_salary 
------------+----------------+----------------+----------------+----------------
 CSE        |              3 |       70000.00 |       75000.00 |       65000.00
(1 row)