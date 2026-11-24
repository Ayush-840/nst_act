//write the function here with same name and return the expected value
function calculateBill(prices, quantities) {
  let subtotal = 0;

  for (let i = 0; i < prices.length; i++) {
    subtotal += prices[i] * quantities[i];
  }

  let discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  let payable = subtotal - discount;

  return [subtotal, discount, payable];
}