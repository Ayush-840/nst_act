function multiplyAll(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}