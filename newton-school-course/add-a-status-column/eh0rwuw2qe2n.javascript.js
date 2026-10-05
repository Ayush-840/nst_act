alter table employees add column status TEXT default 'active';
select emp_id,emp_name,status
from employees