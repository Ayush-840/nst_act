//write your code here
const fs = require("fs");
const a = Number(fs.readFileSync("./file1.txt"))
const b = Number(fs.readFileSync("./file2.txt"))
fs.writeFileSync("./result.txt", `${a + b}`)