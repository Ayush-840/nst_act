db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer_info"
    }
  },
  {
    $unwind: "$customer_info"
  },
  {
    $project: {
      _id: 0,
      book_title: 1,
      price: 1,
      customer_name: "$customer_info.name",
      email: "$customer_info.email"
    }
  }
]);