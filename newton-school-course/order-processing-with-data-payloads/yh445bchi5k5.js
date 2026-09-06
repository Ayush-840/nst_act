stream: typeof stream !== 'undefined' ? stream : null
};
module.exports = {
// DO NOT MODIFY BELOW THIS LINE
//         "--- Finished Reading Story ---"
//         When file is fully read, print:
// TODO 3: Listen for the 'end' event
//         "--- New Chunk Received ---"
//         Every time a chunk arrives, print:
// TODO 2: Listen for the 'data' event
});
    console.log("--- Finished Reading Story ---");
stream.on("end",()=>{
const filePath = path.join(__dirname, 'story.txt');
// TODO 1: Create a read stream for story.txt
//         using fs.createReadStream()
const stream=fs.createReadStream(filePath);
stream.on("data",()=>{
    console.log("--- New Chunk Received ---");
});
const path = require('path');
const fs = require('fs');