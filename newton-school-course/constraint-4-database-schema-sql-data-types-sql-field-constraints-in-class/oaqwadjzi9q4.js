CREATE TABLE students (
  roll_number INT PRIMARY KEY, 
  name VARCHAR(100) NOT NULL,
  age INT CHECK (age>=17), 
  status VARCHAR(20) DEFAULT "active" 
);

Desc students;