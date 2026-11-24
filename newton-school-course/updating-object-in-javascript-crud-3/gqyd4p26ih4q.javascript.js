function updateKeyUsingNewObject(obj, keyToUpdate, newValue) {
  return {
    ...obj,
    [keyToUpdate]: newValue,
  };
}