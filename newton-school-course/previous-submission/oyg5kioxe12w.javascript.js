const path = require('path');
const filePath = path.join(__dirname, 'story.txt');
// TODO 1: Create a read stream for story.txt
//         using fs.createReadStream()
 const stream = fs.createReadStream(filePath);
// TODO 2: Listen for the 'data' event
//         Every time a chunk arrives, print:
//         "--- New Chunk Received ---"
stream.on('data', () => { console.log("--- New Chunk Received ---"); });
// TODO 3: Listen for the 'end' event
//         When file is fully read, print:
//         "--- Finished Reading Story ---"
stream.on('end', () => { console.log("--- Finished Reading Story ---"); });
// DO NOT MODIFY BELOW THIS LINE
module.exports = {
const fs = require('fs');
    stream: typeof stream !== 'undefined' ? stream : null
};