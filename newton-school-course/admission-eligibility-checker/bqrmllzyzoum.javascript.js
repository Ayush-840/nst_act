-- 1. Merit Scholarship applicants
SELECT * FROM applicants 
WHERE gpa >= 3.7 AND entrance_score >= 85;

-- 2. Standard Admission applicants
SELECT * FROM applicants 
WHERE gpa >= 3.0 AND entrance_score >= 70 AND age BETWEEN 17 AND 22;

-- 3. Conditional Admission applicants
SELECT * FROM applicants 
WHERE (gpa >= 2.8 OR entrance_score >= 75) AND status = 'Pending';

-- 4. Non-pending applicants with GPA > 3.5
SELECT * FROM applicants 
WHERE status <> 'Pending' AND gpa > 3.5;

-- 5. CS or Engineering applicants with GPA >= 3.0
SELECT * FROM applicants 
WHERE preferred_major IN ('Computer Science', 'Engineering') AND gpa >= 3.0;