-- Hint:
-- Use GROUP BY and HAVING.
-- Apply conditions on aggregate values.

-- select * from
-- (select department,count(*) as employee_count,round(avg(salary),2) as average_salary ,
-- max(salary) as maximum_salary , min(salary) as minimum_salary
-- from employees 
-- group by department) as emp_tab
-- where employee_count>3 and average_salary>60000
-- order by average_salary desc;


select department,
count(*) as employee_count, 
round(avg(salary),2) as average_salary,
max(salary) as maximum_salary ,
min(salary) as minimum_salary 
from employees 
group by department
having count(*)>=3 and round(avg(salary),2)>60000
order by round(avg(salary),2) desc;