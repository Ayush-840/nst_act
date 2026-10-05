SELECT
attendance_id,
student_name,
to_char(attendance_date,'DD-Mon-YYYY') AS attendance_on
FROM student_attendance
WHERE
attendance_date BETWEEN '2025-08-21' AND '2025-09-10'
 /* attendance date in between 10th-September-2025 ( Included ) and the last 20 days before 10th-September-2025 */;