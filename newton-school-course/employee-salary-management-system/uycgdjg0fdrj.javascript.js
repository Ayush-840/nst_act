function manageEmployeeSalary(employees, employeeId, salaryToCheck) {
    const foundEmployee = employees.find((emp) => emp.id === employeeId);

    if (foundEmployee) {
        console.log("Employee found");
    } else {
        console.log("Employee not found");
    }
}