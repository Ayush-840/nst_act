// ─── 4 ───
select 
employee_id,employee_name,performance_score,
ROW_NUMBER() over(
    order by performance_score desc
) as rank_number
from EMPLOYEE_PERFORMANCE

// ─── 7 ───
 employee_id | employee_name | performance_score | rank_number 
-------------+---------------+-------------------+-------------
         103 | Vivaan        |                95 |           1
         101 | Aarav         |                92 |           2
         105 | Ishaan        |                90 |           3
         102 | Diya          |                88 |           4
         104 | Ananya        |                81 |           5
(5 rows)