function successfulOrders(orders) {
  let count = 0;

  for (let i = 0; i < orders.length; i++) {
    const name = orders[i].name;
    if (checkQuantity(name) > 0) {
      count++;
      updateQuantity(name);
    }
  }

  return count;
}