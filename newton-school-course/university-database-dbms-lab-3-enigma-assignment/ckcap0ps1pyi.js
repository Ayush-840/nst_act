create table Students(student_id int primary key,name varchar(100),age int check(age>=18),department_id int , foreign key (department_id) references Departments(department_id));
desc Students;