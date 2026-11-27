db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department_id",
      foreignField: "_id",
      as: "department"
    }
  },
  {
    $unwind: "$department"
  },
  {
    $project: {
      _id: 0,
      name: 1,
      department_name: "$department.department_name"
    }
  }
]);