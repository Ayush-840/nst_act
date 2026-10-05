SELECT 
    d.DepartmentID,
    d.DepartmentName,
    d.Location,
    e.EmployeeID,
    e.EmployeeName
FROM 
    Departments d
LEFT JOIN 
    Employees e ON d.DepartmentID = e.DepartmentID
ORDER BY 
    d.DepartmentID ASC,
    e.EmployeeID ASC;