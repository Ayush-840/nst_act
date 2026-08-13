function processGroceryOrder(order, availableStock){
    return new Promise((res,rej)=>{
        let item = order.item
        let qunt=order.quantity
        if(!(item in availableStock)){
                rej("Order failed! Item not found.")
                return 
            }if(quant>availableStock[item].quantity){
                rej("Order failed! Not enough stock.")
                return 
            }if(item in availableStock && quant <= availableStock[item].quantity){
                res("Order processed successfully!")
                availableStock[item].quantity -= quant
            }

    })
}