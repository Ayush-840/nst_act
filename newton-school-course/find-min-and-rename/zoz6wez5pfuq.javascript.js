db.employees.updateMany(
  {},
  [
    {
      $set: {
        score: { $min: ["$score", 60] },
        department: "$dept"
      }
    },
    {
      $unset: "dept"
    }
  ]
);

db.employees.find(
  {},
  {
    _id: 0,
    name: 1,
    department: 1,
    score: 1
  }
);