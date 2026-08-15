class Employee:
    # Constructor to initialize name and salary
    def __init__(self, name: str, salary: int):
        self.name = name
        self.salary = salary

    # Method to calculate and return the annual salary
    def annual_salary(self):
        return self.salary * 12

# Take input from user
name_input = input().strip()
salary_input = int(input().strip())

# Create an Employee object
emp = Employee(name_input, salary_input)

# Print the annual salary
print(emp.annual_salary())