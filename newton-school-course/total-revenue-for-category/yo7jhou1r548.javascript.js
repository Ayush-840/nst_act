db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalRevenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  },
  {
    $project: {
      _id: 0,
      category: "$_id",
      totalRevenue: 1
    }
  },
  {
    $sort: {
      category: 1
    }
  }
]);