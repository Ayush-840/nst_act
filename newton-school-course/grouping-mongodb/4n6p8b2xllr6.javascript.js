db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total_salary: { $sum: "$salary" },
      average_salary: { $avg: "$salary" }
    }
  },
  {
    $sort: {
      _id: 1
    }
  },
  {
    $project: {
      _id: 0,
      department: "$_id",
      total_salary: 1,
      average_salary: 1
    }
  }
]);