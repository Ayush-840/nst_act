alter table employees alter column salary TYPE NUMERIC(10,2);
Alter table employees add column joining_date date default '2026-08-19';
insert into employees (emp_id,emp_name,salary,department) values (106,'Karan',40000,'IT');
Select*from employees;