select 
    a.EmployeeName as Employee, 
    b.EmployeeName as Manager
from Employees as a 
left join Employees as b 
on a.ManagerID = b.EmployeeID;