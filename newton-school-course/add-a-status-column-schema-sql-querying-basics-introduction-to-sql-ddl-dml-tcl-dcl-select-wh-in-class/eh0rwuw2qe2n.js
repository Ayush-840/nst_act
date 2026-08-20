// ─── 1 ───
Alter table employees
add column status TEXT default 'active';

select emp_id, emp_name, status from employees;


// ─── 2 ───
ALTER TABLE
 emp_id |   emp_name   | status 
--------+--------------+--------
      1 | Aarav Sharma | active
      2 | Priya Nair   | active
(2 rows)