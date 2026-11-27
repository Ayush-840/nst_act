//write your code here
db.employees.deleteMany({
  salary: { $lt: 40000 }
});

db.employees.updateMany(
  {},
  { $inc: { salary: 5000 } }
);