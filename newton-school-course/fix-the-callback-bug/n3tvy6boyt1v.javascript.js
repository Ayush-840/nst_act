// BUGGY CALLBACK – FIX THIS!
function calculateBill(amount, callback) {
  return callback(amount);
}

function applyGST(amount) {
  return amount + amount * 0.18;
}

// Behind the scenes:
// The system will internally call calculateBill using the amount from the input,
// and the applyGST callback function defined by the student.
// Like this:
// const result = calculateBill(amount, applyGST);