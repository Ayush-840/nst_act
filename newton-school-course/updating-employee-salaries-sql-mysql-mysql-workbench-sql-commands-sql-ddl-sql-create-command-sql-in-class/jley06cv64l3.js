insert into Employees(EmployeeID,Name, Salary , Department, YearsWorked ) values(6,"John Brown",60000,"Finance",0);
update Employees
set salary=salary+salary*0.1
where department="Finance";

alter table Employees
add column Bonus int;

update Employees
set Bonus=5000
where YearsWorked>5;

Select * FROM Employees;