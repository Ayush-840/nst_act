function checkDelivery(amount, isMember) {
  if(amount>=500 || isMember===true){
    return ("Free Delivery")
  }else{
    return ("Delivery Charges Applied")
  }
}