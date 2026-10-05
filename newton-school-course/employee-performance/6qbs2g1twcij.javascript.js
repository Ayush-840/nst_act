select
employee_id,
employee_name,
performance_score,
ROW_NUMBER() over(order by performance_score desc) as rank_number
from EMPLOYEE_PERFORMANCE