Alter table employees
add column status text default 'active';

select emp_id, emp_name, status from employees;