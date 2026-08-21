-- alter table employees drop joining_date;
-- alter table rename department column to dept_name;
ALTER TABLE employees DROP COLUMN joining_date;
ALTER TABLE employees rename COLUMN department to dept_name;
ALTER TABLE employees add check(salary>=30000);
SELECT * FROM employees;