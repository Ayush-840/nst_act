// ─── 14 ───
-- alter table employees drop joining_date;
-- alter table rename department column to dept_name;
ALTER TABLE employees DROP COLUMN joining_date;
ALTER TABLE employees rename COLUMN department to dept_name;
ALTER TABLE employees add check(salary>=30000);
SELECT * FROM employees;

// ─── 18 ───
ALTER TABLE
ALTER TABLE
ALTER TABLE
 emp_id | emp_name |  salary  | dept_name 
--------+----------+----------+-----------
    101 | Varun    | 38000.00 | Finance
    102 | Isha     | 45000.00 | HR
    103 | Dev      | 53000.00 | IT
    104 | Naina    | 36000.00 | Marketing
    105 | Ritesh   | 49000.00 | Finance
    106 | Simran   | 41500.00 | IT
(6 rows)