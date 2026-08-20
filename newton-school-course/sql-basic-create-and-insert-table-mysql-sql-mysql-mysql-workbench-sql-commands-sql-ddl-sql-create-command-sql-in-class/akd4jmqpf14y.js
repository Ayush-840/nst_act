create table employees(employee_id int primary key,first_name varchar(50) not null, last_name varchar(50) not null,email varchar(100) unique,hire_date DATE, salary DECIMAL(10,2));
insert into employees(employee_id,first_name,last_name,email,hire_date,salary) values(101,"Vanshika","Gulati","vanshika.gulati@techinnovators.com","2023-01-15",75000.50);
select * from employees;