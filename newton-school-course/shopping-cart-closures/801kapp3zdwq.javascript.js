function createCart() {
  const items = [];

  function addItem(itemName) {
    items.push(itemName);
  }

  function removeItem(itemName) {
    const index = items.indexOf(itemName);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

  function getTotalItems() {
    return items.length;
  }

  return {
    addItem,
    removeItem,
    getTotalItems,
  };
}