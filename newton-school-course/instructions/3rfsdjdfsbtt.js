//create the file and add the required content.
const fs = require('fs');
const content = 'Welcome to the FS Module!';
fs.writeFileSync('src/welcome.txt', content);
console.log(content);