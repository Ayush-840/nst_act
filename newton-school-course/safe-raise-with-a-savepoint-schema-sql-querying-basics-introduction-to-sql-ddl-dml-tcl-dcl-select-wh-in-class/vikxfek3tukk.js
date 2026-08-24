begin;
update employees set salary=salary+5000;
savepoint sp1;
Delete from employees
where department='Intern';
ROLLBACK TO sp1;
COMMIT;

select emp_id, emp_name, department, salary from employees;