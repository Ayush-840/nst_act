db.customerRecord.aggregate([
    {
        $group : {
            _id : "$customer_id",
            totalPurchases : {$sum : 1},
            totalSpent : {$sum : "$amount"},
            avgPurchaseAmount : {$avg : "$amount"}
        }
    },
    {
        $sort : {
            "totalSpent" : -1
        }
    }
])