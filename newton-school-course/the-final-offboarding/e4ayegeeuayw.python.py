// ─── 4 ───
-- ============================================
-- INSPECT THE DATA
-- ============================================

SELECT * FROM departments;
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
WHERE employee_id = (SELECT employee_id FROM employees WHERE employee_code = 'EMP-1001');

DELETE from access_tokens 
where employee_id = (SELECT employee_id FROM employees WHERE employee_code = 'EMP-1001');

-- update devices
-- set employee_id = Null
--  where device_id =1;
-- where employee_id = (SELECT employee_id from employees where employee_code = 'EMP-1001');

UPDATE employee_devices 
SET is_active = false 
WHERE employee_id = (SELECT employee_id FROM employees WHERE employee_code = 'EMP-1001');

update project_assignments 
set is_active='f'
where employee_id = 1;


UPDATE employees 
SET is_active = false, department_id = NULL 
WHERE employee_code = 'EMP-1001';


-- Write your SQL queries above this line.

COMMIT;

// ─── 25 ───
 department_id | department_name 
---------------+-----------------
             1 | Engineering
             2 | Design
             3 | Marketing
(3 rows)

 employee_id | employee_code | employee_name | department_id | is_active 
-------------+---------------+---------------+---------------+-----------
           1 | EMP-1001      | Aarav Sharma  |             1 | t
           2 | EMP-1002      | Meera Kapoor  |             1 | t
           3 | EMP-1003      | Kabir Mehta   |             2 | t
(3 rows)

 session_id | employee_id | session_token  | is_active 
------------+-------------+----------------+-----------
          1 |           1 | SESSION-1001-A | t
          2 |           1 | SESSION-1001-B | t
(2 rows)

 token_id | employee_id |    token     | token_type 
----------+-------------+--------------+------------
        1 |           1 | TOKEN-1001-A | TEMPORARY
        2 |           1 | TOKEN-1001-B | TEMPORARY
(2 rows)

 project_id | project_name 
------------+--------------
          1 | Project-A
          2 | Project-B
(2 rows)

 employee_id | project_id | is_active 
-------------+------------+-----------
           1 |          1 | t
(1 row)

 device_id |  device_name   
-----------+----------------
         1 | MacBook-Pro-01
         2 | ThinkPad-T14
(2 rows)

 employee_id | device_id | is_active 
-------------+-----------+-----------
           1 |         1 | t
           1 |         2 | t
(2 rows)

 leave_id | employee_id | leave_type | status  
----------+-------------+------------+---------
        1 |           1 | Annual     | PENDING
(1 row)

BEGIN
DELETE 2
DELETE 2
UPDATE 2
UPDATE 1
UPDATE 1
COMMIT


// ─── 26 ───
-- ============================================
-- INSPECT THE DATA
-- ============================================

SELECT * FROM departments;
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

-- DELETE FROM employee_sessions 
-- WHERE employee_id = 1;

DELETE FROM employee_sessions 
WHERE employee_id = (SELECT employee_id FROM employees WHERE employee_code = 'EMP-1001');

DELETE from access_tokens 
where employee_id = (SELECT employee_id FROM employees WHERE employee_code = 'EMP-1001');

-- update devices
-- set employee_id = Null
--  where device_id =1;
-- where employee_id = (SELECT employee_id from employees where employee_code = 'EMP-1001');

-- update employees 
-- set is_active='f'
-- where employee_code='EMP-1001';
UPDATE employees 
SET is_active = false, department_id = NULL 
WHERE employee_code = 'EMP-1001';


-- Write your SQL queries above this line.

COMMIT;