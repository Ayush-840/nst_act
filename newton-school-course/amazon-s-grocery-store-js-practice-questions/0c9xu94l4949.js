function processGroceryOrder(order, availableStock){
    return new Promise((res,rej)=>{
        let item=order.item
        let quant=order.quantity
        if(!(item in availableStock)){
            rej("Order failed! Item not found.")
        }if(quant > availableStock[item].quantity){
            rej("Order failed! Not enough stock.")
        }if(item in availableStock && quant <= availableStock[item].quantity){
            res("Order processed successfully!")
            availableStock[item].quantity -= quant
        }

    })
}