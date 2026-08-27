// ─── 1 ───
select * from Students 
where gpa >= 3.5;

select * from Students
where enrollment_year < 2022 and status='Active';

select * from Students
where credits > 60 and gpa<3.0;

select*from Students
where status <>'Active';

// ─── 5 ───
 student_id |  full_name   |      major       | gpa  | credits | enrollment_year | status 
------------+--------------+------------------+------+---------+-----------------+--------
          1 | Arjun Sharma | Computer Science | 3.85 |      90 |            2021 | Active
(1 row)

 student_id |  full_name   |      major       | gpa  | credits | enrollment_year | status 
------------+--------------+------------------+------+---------+-----------------+--------
          1 | Arjun Sharma | Computer Science | 3.85 |      90 |            2021 | Active
(1 row)

 student_id | full_name | major | gpa | credits | enrollment_year | status 
------------+-----------+-------+-----+---------+-----------------+--------
(0 rows)

 student_id | full_name | major | gpa | credits | enrollment_year | status 
------------+-----------+-------+-----+---------+-----------------+--------
(0 rows)