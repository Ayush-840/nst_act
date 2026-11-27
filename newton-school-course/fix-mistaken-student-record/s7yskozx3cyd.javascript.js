//query goes here

db.students.updateOne(
  {
    name: "Riya",
    year: 3,
    department: "Computer Science"
  },
  {
    $set: { year: 4 }
  }
);

db.students.find({
  name: "Riya",
  department: "Computer Science"
});