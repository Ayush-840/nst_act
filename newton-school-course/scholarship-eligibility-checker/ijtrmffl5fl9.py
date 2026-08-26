// ─── 1 ───
select student_name,department,score from students
where score >= 80 AND (department='Computer Science' or department='Information Technology') And is_suspended=False

// ─── 5 ───
 student_name |       department       | score 
--------------+------------------------+-------
 Rahul        | Computer Science       |    92
 Priya        | Information Technology |    88
 Anjali       | Computer Science       |    95
 Sneha        | Information Technology |    81
 Arjun        | Computer Science       |    85
(5 rows)