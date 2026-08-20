// ─── 1 ───
begin;
update employees set salary=salary+5000;
savepoint sp1;
Delete from employees
where department='Intern';
ROLLBACK TO sp1;
COMMIT;

select emp_id, emp_name, department, salary from employees;

// ─── 7 ───
BEGIN
UPDATE 3
SAVEPOINT
DELETE 1
ROLLBACK
COMMIT
 emp_id |   emp_name   | department | salary 
--------+--------------+------------+--------
      1 | Aarav Sharma | Sales      |  65000
      2 | Priya Nair   | Intern     |  25000
      3 | Rahul Verma  | Tech       |  57000
(3 rows)