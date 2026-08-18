const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret.txt');
const reader = fs.createReadStream(filePath, 'utf-8');
reader.on('data', (chunk) => {
    console.log(chunk);
});
// TODO 1: Create a read stream for secret.txt
//         using fs.createReadStream()
//         Pass 'utf-8' as the second argument
// TODO 2: Listen for the 'data' event
//         and print the chunk to the console
// DO NOT MODIFY BELOW THIS LINE
module.exports = { reader: typeof reader !== 'undefined' ? reader : null };