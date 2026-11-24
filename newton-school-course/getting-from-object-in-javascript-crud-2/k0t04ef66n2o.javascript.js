function getValueFromJSON(objectString, key) {
  const parsedObject = JSON.parse(objectString);
  return parsedObject[key];
}