const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'huge_data.txt');
const reader = fs.createReadStream(filePath, 'utf-8');
// BUG: This accumulates ALL chunks into RAM
// defeating the purpose of using a stream
 let lineCount = 0; 
reader.on('data', (chunk) => {
    // BUG IS HERE: Fix this listener so it counts
    // lines WITHOUT storing chunks in memory
 lineCount += chunk.toString().split('\n').length - 1; 
});
reader.on('end', () => {
    // BUG IS HERE TOO: Fix this to use
    // your new memory-efficient counter
 console.log('Total lines:', lineCount); 
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { reader };