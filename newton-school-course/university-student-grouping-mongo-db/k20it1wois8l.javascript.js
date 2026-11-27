db.courses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "student_id",
      foreignField: "_id",
      as: "student_info"
    }
  },
  {
    $unwind: "$student_info"
  },
  {
    $project: {
      _id: 0,
      course_name: 1,
      student_name: "$student_info.name",
      email: "$student_info.email"
    }
  }
]);