// ─── 1 ───
update STUDENT_RESULTS set marks=85 where student_id=103;
delete from STUDENT_RESULTS where marks <35;
select*from STUDENT_RESULTS

// ─── 2 ───
UPDATE 1
DELETE 2
 student_id | student_name |   subject   | marks 
------------+--------------+-------------+-------
        101 | Aarav        | Mathematics |    78
        102 | Diya         | Science     |    92
        103 | Rohan        | English     |    85
(3 rows)