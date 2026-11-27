db.employees.updateMany(
  {},
  [
    {
      $set: {
        experience: { $min: ["$experience", 2] },
        salary: { $multiply: ["$salary", 1.1] }
      }
    }
  ]
);

db.employees.find(
  {},
  {
    _id: 0,
    name: 1,
    experience: 1,
    salary: 1
  }
);