function failedOrders(orders) {
  let failedCount = 0;

  for (let i = 0; i < orders.length; i++) {
    const name = orders[i].name;
    if (checkQuantity(name) > 0) {
      updateQuantity(name);
    } else {
      failedCount++;
    }
  }

  return failedCount;
}