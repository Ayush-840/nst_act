// ─── 9 ───
-- Hint:
-- NULLIF(sales_target, 0) turns a 0 target into NULL, which then makes the
--   whole division NULL instead of throwing a divide-by-zero error.
-- COALESCE(..., 0) turns that NULL result into a displayable 0.
-- Apply the same ROUND(COALESCE(...)) expression again inside the CASE.

-- select * from employee_performance

select 
emp_name,
(ROUND(COALESCE((sales_achieved/NULLIF(sales_target, 0) * 100),0),2)) as achievement_percentage,
case
    WHEN (ROUND(COALESCE((sales_achieved/NULLIF(sales_target, 0) * 100),0),2)) >= 100 THEN 'Excellent'
    WHEN (ROUND(COALESCE((sales_achieved/NULLIF(sales_target, 0) * 100),0),2)) >= 80 THEN 'Good'
    ELSE 'Needs Improvement'
end as performance
from employee_performance
order by achievement_percentage desc,emp_name asc

// ─── 13 ───
 emp_name | achievement_percentage |    performance    
----------+------------------------+-------------------
 A        |                  80.00 | Good
 B        |                  80.00 | Good
 C        |                  33.33 | Needs Improvement
(3 rows)