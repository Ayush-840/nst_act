function calculateTotalCost(basePrice, weekendSurcharge, imaxFee, bookingFee) {
  const oneTicketCost = basePrice + weekendSurcharge + imaxFee + bookingFee;
  const totalCostForFour = oneTicketCost * 4;
  const discount = totalCostForFour * 0.15;
  const finalAmount = totalCostForFour - discount;

  console.log(`Total cost for 4 tickets: ₹${finalAmount}`);
}