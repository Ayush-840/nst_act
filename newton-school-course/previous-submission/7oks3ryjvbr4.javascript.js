const fs = require("fs"); // built-in module
const path = require("path");
const filePath = path.join(__dirname, "chat.txt");
fs.writeFile(filePath,"Hello from Node.js!", (err,data) => {