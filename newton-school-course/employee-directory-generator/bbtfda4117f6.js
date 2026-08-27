// ─── 1 ───

-- select concat(last_name,',',first_name) as display_name from employees;
-- select * from employes;
select last_name || ', ' || first_name as display_name,
UPPER(SUBSTRING(last_name, 1, 3)) || emp_id  as emp_code,
department from employees
order by last_name;

-- -- Hint for task 2, use UPPER(SUBSTRING(last_name, 1, 3)) to get the prefix. 
--  from employees;

// ─── 7 ───
  display_name  | emp_code | department 
----------------+----------+------------
 Brown, Olivia  | BRO104   | Finance
 Davis, Noah    | DAV105   | HR
 Johnson, Emma  | JOH102   | Marketing
 Miller, Sophia | MIL106   | Operations
 Smith, John    | SMI101   | Sales
 Williams, Liam | WIL103   | IT
(6 rows)