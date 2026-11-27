db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department_id",
      foreignField: "_id",
      as: "department_info"
    }
  },
  {
    $unwind: "$department_info"
  },
  {
    $group: {
      _id: "$department_info.department_name",
      total_salary: { $sum: "$salary" },
      average_salary: { $avg: "$salary" },
      employee_count: { $sum: 1 }
    }
  },
  {
    $match: {
      total_salary: { $gt: 300000 }
    }
  },
  {
    $project: {
      _id: 0,
      department: "$_id",
      total_salary: 1,
      average_salary: { $round: ["$average_salary", 2] },
      employee_count: 1
    }
  },
  {
    $sort: {
      total_salary: -1
    }
  }
]);