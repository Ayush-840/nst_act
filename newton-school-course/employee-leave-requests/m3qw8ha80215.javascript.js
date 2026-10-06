select
leave_id, employee_id, leave_start_date, leave_end_date, leave_type,
(leave_end_date-leave_start_date)+1 as leave_duration_days,
CASE
   WHEN 
      (leave_end_date-leave_start_date + 1) <= 3 then 'Short Leave'
    WHEN(leave_end_date-leave_start_date +1 ) between 4 and 7 then 'Medium Leave'
      else 'Long Leave'
    end as leave_length_category
from EmployeeLeaves
order by leave_id asc;