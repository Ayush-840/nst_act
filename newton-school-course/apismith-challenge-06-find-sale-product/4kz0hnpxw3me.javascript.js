// Your code here
async function getSaleProducts(api, clothingType) {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const products = Array.isArray(data)
      ? data
      : Array.isArray(data.products)
        ? data.products
        : [];

    return products
      .filter(
        (product) =>
          product &&
          product.category === clothingType &&
          Boolean(product.onSale ?? product.isOnSale ?? product.sale)
      )
      .map((product) => product.name);
  } catch (error) {
    return [];
  }
}