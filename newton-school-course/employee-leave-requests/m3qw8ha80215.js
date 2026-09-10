SELECT 
    leave_id,
    employee_id,
    leave_start_date,
    leave_end_date,
    leave_type,
    (leave_end_date - leave_start_date + 1) AS leave_duration_days,
    CASE 
        WHEN (leave_end_date - leave_start_date + 1) BETWEEN 1 AND 3 THEN 'Short Leave'
        WHEN (leave_end_date - leave_start_date + 1) BETWEEN 4 AND 7 THEN 'Medium Leave'
        ELSE 'Long Leave'
    END AS leave_length_category
FROM 
    EmployeeLeaves
ORDER BY 
    leave_id ASC;