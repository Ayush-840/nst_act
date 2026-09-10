// ─── 1 ───
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

// ─── 2 ───
 leave_id | employee_id | leave_start_date | leave_end_date | leave_type | leave_duration_days | leave_length_category 
----------+-------------+------------------+----------------+------------+---------------------+-----------------------
        1 |         101 | 2024-01-05       | 2024-01-05     | Sick       |                   1 | Short Leave
        2 |         102 | 2024-02-10       | 2024-02-12     | Vacation   |                   3 | Short Leave
        3 |         103 | 2024-03-28       | 2024-04-03     | Vacation   |                   7 | Medium Leave
(3 rows)