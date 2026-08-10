# Your code here
function solve(obj) {
  // Use for...of to iterate over the values of the object
  for (const value of Object.values(obj)) {
    console.log(value);
  }

  // Use for...in to iterate over key-value pairs
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}