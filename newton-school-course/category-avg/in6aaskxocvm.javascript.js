db.products.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $project: {
      _id: 0,
      category: "$_id",
      averagePrice: 1
    }
  },
  {
    $sort: {
      category: 1
    }
  }
]);