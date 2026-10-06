select 
department,
count(*) as student_count
from STUDENTS
group by department
order by department asc;

SELECT 
department,COUNT(*) as student_count
FROM STUDENTS
group by department
order by student_count DESC
limit 1;



-- SELECT department, COUNT(*) AS student_count
-- FROM STUDENTS
-- GROUP BY department
-- ORDER BY student_count DESC
-- LIMIT 1;