// write your code here
function countValues(...objects) {
  const counts = {};

  for (const obj of objects) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
      for (const value of Object.values(obj)) {
        const key = String(value);
        counts[key] = (counts[key] || 0) + 1;
      }
    }
  }

  return counts;
}

// Read single-line space-separated JSON objects from standard input
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

if (input) {
  const matches = input.match(/\{[^{}]*\}/g) || [];
  const parsedObjects = matches.map((chunk) => JSON.parse(chunk));
  console.log(countValues(...parsedObjects));
}