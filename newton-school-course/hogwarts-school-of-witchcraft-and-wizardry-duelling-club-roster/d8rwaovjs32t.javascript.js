// ─── 1 ───
select 
Upper(full_name) as formatted_name,
Concat(Upper(house), Extract(year from enrollment_date)) as participant_code
from hogwarts_students
where 
Extract(year from enrollment_date)=2024 and email like '%@hogwarts.edu'
order by formatted_name asc

// ─── 2 ───
   formatted_name   | participant_code 
--------------------+------------------
 CEDRIC DIGGORY     | HUFFLEPUFF2024
 DRACO MALFOY       | SLYTHERIN2024
 HARRY POTTER       | GRYFFINDOR2024
 HERMIONE GRANGER   | GRYFFINDOR2024
 LUNA LOVEGOOD      | RAVENCLAW2024
 NEVILLE LONGBOTTOM | GRYFFINDOR2024
(6 rows)