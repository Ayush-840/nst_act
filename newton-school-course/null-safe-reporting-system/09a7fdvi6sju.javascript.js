select 
emp_name
from employee_performance 
where bonus is null;

select 
emp_name,
    case
       when bonus is not null then bonus::text
       ELSE 'Not Awarded'
    end as bonus_display ,

    case 
       when sales_target is null or  sales_target=0 then 0
       else ROUND((sales_achieved::numeric / sales_target) * 100, 1)
    end as achievement_pct

from employee_performance
where sales_target is not null
ORDER by achievement_pct desc;


-- SELECT 
--   emp_name,
--   CASE 
--     WHEN bonus IS NOT NULL THEN bonus::text
--     ELSE 'Not Awarded'
--   END AS bonus_display,
--   CASE 
--     WHEN sales_target IS NULL OR sales_target = 0 THEN 0
--     ELSE ROUND((sales_achieved::numeric / sales_target) * 100, 1)
--   END AS achievement_pct
-- FROM employee_performance
-- WHERE sales_target IS NOT NULL
-- ORDER BY achievement_pct DESC;



-- -- Query 1: Un employees ke naam jinka bonus NULL hai
-- SELECT emp_name 
-- FROM employee_performance 
-- WHERE bonus IS NULL;

-- -- Query 2: Complete report (without COALESCE)
-- SELECT 
--   emp_name,
--   CASE 
--     WHEN bonus IS NOT NULL THEN bonus::text
--     ELSE 'Not Awarded'
--   END AS bonus_display,
--   CASE 
--     WHEN sales_target IS NULL OR sales_target = 0 THEN 0
--     ELSE ROUND((sales_achieved::numeric / sales_target) * 100, 1)
--   END AS achievement_pct
-- FROM employee_performance
-- WHERE sales_target IS NOT NULL
-- ORDER BY achievement_pct DESC;