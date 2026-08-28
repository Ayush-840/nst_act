with AvgSalaryPerDept as (
    select 
        d.department_id, 
        d.department_name, 
        avg(e.salary) as average_salary,
        count(e.department_id) as employee_count 
    from departments d 
    join employees e
    using (department_id) 
    group by d.department_id, d.department_name
)
select aspd.department_name, aspd.average_salary, aspd.employee_count 
from AvgSalaryPerDept as aspd 
order by aspd.average_salary desc;