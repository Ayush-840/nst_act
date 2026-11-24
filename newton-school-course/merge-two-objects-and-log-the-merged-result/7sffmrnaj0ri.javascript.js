function mergeAndLogObjects(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
}