db.customers.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "customer_id",
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $match: {
      "orders.status": "Delivered"
    }
  },
  {
    $group: {
      _id: "$city",
      totalDeliveredAmount: { $sum: "$orders.amount" }
    }
  },
  {
    $project: {
      _id: 0,
      city: "$_id",
      totalDeliveredAmount: 1
    }
  },
  {
    $sort: {
      totalDeliveredAmount: -1
    }
  }
]);