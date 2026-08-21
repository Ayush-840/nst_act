// ─── 1 ───
alter table employees alter column salary TYPE NUMERIC(10,2);
Alter table employees add column joining_date date default '2026-08-19';
insert into employees (emp_id,emp_name,salary,department) values (106,'Karan',40000,'IT');
Select*from employees;

// ─── 5 ───
ALTER TABLE
ALTER TABLE
INSERT 0 1
 emp_id | emp_name |  salary  | department | joining_date 
--------+----------+----------+------------+--------------
    201 | Rohan    | 37000.00 | Marketing  | 2026-08-19
    202 | Pooja    | 46000.00 | Finance    | 2026-08-19
    203 | Arjun    | 52000.00 | IT         | 2026-08-19
    204 | Meera    | 41000.00 | HR         | 2026-08-19
    205 | Vikram   | 48000.00 | Marketing  | 2026-08-19
    106 | Karan    | 40000.00 | IT         | 2026-08-19
(6 rows)