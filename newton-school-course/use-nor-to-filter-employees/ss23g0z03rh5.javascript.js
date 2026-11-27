db.employees.find(
  {
    $nor: [
      { department: "Sales" },
      { age: { $gt: 25 } }
    ]
  },
  {
    _id: 0,
    name: 1,
    age: 1,
    department: 1
  }
);