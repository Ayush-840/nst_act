SELECT 
    s.FirstName, 
    s.LastName, 
    c.CourseName, 
    g.Grade
FROM Enrollments e
JOIN Students s ON e.StudentID = s.StudentID
JOIN Courses c ON e.CourseID = c.CourseID
LEFT JOIN Grades g ON e.EnrollmentID = g.EnrollmentID
ORDER BY 
    e.StudentID ASC, 
    e.CourseID ASC;