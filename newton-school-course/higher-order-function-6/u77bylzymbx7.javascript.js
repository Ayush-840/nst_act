// Your code here
function parent(callback, num) {
  return callback(num);
}

// Read input from standard input for Newton School playground
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

if (lines.length >= 2) {
  const callbackLine = lines[0].trim();
  const num = Number(lines[1].trim());

  // Extract the callback function from the first line (e.g., "function fN(input){ return input}")
  const createCallback = new Function(`${callbackLine}; return typeof fN === "function" ? fN : null;`);
  let callbackFn = createCallback();

  if (!callbackFn) {
    // Fallback if the function has a different name or is an expression
    const fnMatch = callbackLine.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/);
    if (fnMatch) {
      callbackFn = new Function(`${callbackLine}; return ${fnMatch[1]};`)();
    } else {
      callbackFn = new Function(`return (${callbackLine});`)();
    }
  }

  console.log(parent(callbackFn, num));
}