function findUnion(arr1, arr2) {
  const uniqueElements = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  arr1.length = 0;
  arr1.push(...uniqueElements);
}