//create the file and add the required content.
const fs = require('fs');
const content = 'Welcome to the FS Module!';
// Write text to src/welcome.txt
fs.writeFileSync('src/welcome.txt', content);
// Read and log the file content
const data = fs.readFileSync('src/welcome.txt', 'utf8');
console.log(data);