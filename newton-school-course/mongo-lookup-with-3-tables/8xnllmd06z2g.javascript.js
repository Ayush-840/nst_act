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
    $lookup: {
      from: "projects",
      localField: "_id",
      foreignField: "employee_id",
      as: "project_info"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      department_name: "$department_info.department_name",
      projects: {
        $map: {
          input: "$project_info",
          as: "proj",
          in: "$$proj.project_name"
        }
      }
    }
  }
])