// ─── 1 ───

SELECT department, COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY department ASC;


SELECT department, COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY student_count DESC
LIMIT 1;

// ─── 2 ───
    department    | student_count 
------------------+---------------
 Computer Science |             3
 Electronics      |             1
 Information Tech |             2
(3 rows)

    department    | student_count 
------------------+---------------
 Computer Science |             3
(1 row)