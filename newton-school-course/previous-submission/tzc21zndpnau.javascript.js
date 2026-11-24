});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { reader };
 console.log('Total lines:', lineCount); 
    // your new memory-efficient counter
reader.on('end', () => {
    // BUG IS HERE TOO: Fix this to use
});
 lineCount += chunk.toString().split('\n').length - 1; 
reader.on('data', (chunk) => {
    // BUG IS HERE: Fix this listener so it counts
    // lines WITHOUT storing chunks in memory
// defeating the purpose of using a stream
 let lineCount = 0; 
// BUG: This accumulates ALL chunks into RAM
const path = require('path');
const filePath = path.join(__dirname, 'huge_data.txt');
const reader = fs.createReadStream(filePath, 'utf-8');
const fs = require('fs');