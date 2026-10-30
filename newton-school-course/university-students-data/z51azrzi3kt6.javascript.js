-- write your code here
select
s.name as student_name,
s.email,
c.name as course_name,
e.enrolled_on
from students s
join enrollments e on s.id = e.student_id
join courses c on e.course_id = c.id
where s.name LIKE '%av' 
  and c.name LIKE 'Data%';