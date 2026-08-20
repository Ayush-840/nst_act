update Employee
set salary=salary+salary*0.1
where department="HR";
DELETE FROM Employee
where salary<50000;
select * from Employee;