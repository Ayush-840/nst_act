function getTotalIncomeGenerated(orders){
    let price=0
    orders.forEach((order)=>{
        let quant =checkQuantity(order.name) 
        if(quant>0){
            price += order.price
            up
        }
    })

}