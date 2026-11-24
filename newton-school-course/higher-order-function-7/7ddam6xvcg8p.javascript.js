// Your code here
function parent(callback, num) {
  return function () {
    return callback(num);
  };
}

// Read input from standard input for Newton School playground
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

if (lines.length >= 2) {
  const callbackLine = lines[0].trim();
  const num = Number(lines[1].trim());

  let callbackFn;
  const fnMatch = callbackLine.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/);
  if (fnMatch) {
    callbackFn = new Function(`${callbackLine}; return ${fnMatch[1]};`)();
  } else {
    callbackFn = new Function(`return (${callbackLine});`)();
  }

  const executor = parent(callbackFn, num);
  console.log(executor());
}