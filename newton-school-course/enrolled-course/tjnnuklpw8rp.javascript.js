select
s.FirstName,
s.LastName,
c.CourseName
from Students s
Left Join Enrollments e 
on s.StudentID = e.StudentID
left join Courses c
on e.CourseID = c.CourseID

Union 
select
s.FirstName,
s.LastName,
c.CourseName
from Students s
right Join Enrollments e 
on s.StudentID = e.StudentID
right join Courses c
on e.CourseID = c.CourseID