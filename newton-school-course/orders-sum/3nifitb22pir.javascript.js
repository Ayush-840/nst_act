db.orders.aggregate([
  {
    $group: {
      _id: "$customer",
      totalAmountSpent: { $sum: "$amount" },
      deliveredCount: {
        $sum: {
          $cond: [{ $eq: ["$status", "Delivered"] }, 1, 0]
        }
      },
      maxOrderAmount: { $max: "$amount" }
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
]);