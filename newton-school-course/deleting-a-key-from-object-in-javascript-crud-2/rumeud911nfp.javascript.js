const removeKeyFromObject = (obj, keyToRemove) => {
  delete obj[keyToRemove];
  return obj;
};