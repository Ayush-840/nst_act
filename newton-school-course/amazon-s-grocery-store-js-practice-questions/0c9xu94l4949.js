function processGroceryOrder(order, availableStock){
    return new Promise((res,rej)=>{
        let item=order.item
        let quant=order.quantity
        if(!(item in availableStock)){
            rej("Order failed! Item not found.")
        }

    })


}