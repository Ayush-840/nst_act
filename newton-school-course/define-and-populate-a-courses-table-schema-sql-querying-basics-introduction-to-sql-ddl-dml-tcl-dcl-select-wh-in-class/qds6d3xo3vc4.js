// ─── 1 ───
Create Table courses(
    course_id INTEGER PRIMARY KEY,
    course_name TEXT,
    credits INTEGER
);

insert into courses(course_id,course_name,credits) values
(1,'Databases',4),
(2,'Operating Systems',3),
(3,'Algorithms',4);

select * from courses

// ─── 2 ───
CREATE TABLE
INSERT 0 3
 course_id |    course_name    | credits 
-----------+-------------------+---------
         1 | Databases         |       4
         2 | Operating Systems |       3
         3 | Algorithms        |       4
(3 rows)