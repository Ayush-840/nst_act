// ─── 2 ───
    department    | student_count 
------------------+---------------
 Computer Science |             3
 Electronics      |             1
 Information Tech |             2
(3 rows)

    department    | student_count 
------------------+---------------
 Information Tech |             2
(1 row)



// ─── 4 ───
select 
department,
count(*) as student_count
from STUDENTS
group by department
order by department asc;

-- select 
-- department,
-- count(*) as student_count
-- from STUDENTS
-- group by department
-- order by department DESC
-- limit 1;



SELECT department, COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY student_count DESC
LIMIT 1;

// ─── 30 ───
SELECT department, COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY department ASC;


SELECT department, COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY student_count DESC
LIMIT 1;