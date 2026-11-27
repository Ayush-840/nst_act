db.students.find({
  gpa: { $gte: 3.8 },
  department: "Biotechnology"
});