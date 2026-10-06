-- ============================================
-- INSPECT THE DATA
-- ============================================

-- SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM employee_sessions;
SELECT * FROM access_tokens;
SELECT * FROM projects;
SELECT * FROM project_assignments;
SELECT * FROM devices;
SELECT * FROM employee_devices;
SELECT * FROM leave_requests;


-- ============================================
-- YOUR SOLUTION
-- ============================================

BEGIN;

-- Write your SQL queries below this line.
DELETE FROM employee_sessions 
WHERE employee_id = 1;

DELETE FROM access_tokens 
WHERE employee_id = 1;

UPDATE employee_devices 
SET is_active = false 
WHERE employee_id = 1 ;

UPDATE project_assignments 
SET is_active = false 
WHERE employee_id = 1;

UPDATE employees 
SET department_id = NULL, is_active = false 
WHERE employee_code = 'EMP-1001';


-- Write your SQL queries above this line.

COMMIT;