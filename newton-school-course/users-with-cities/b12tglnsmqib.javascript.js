db.users.aggregate([
  {
    $lookup: {
      from: "cities",
      localField: "city_id",
      foreignField: "_id",
      as: "city_info"
    }
  }
]);