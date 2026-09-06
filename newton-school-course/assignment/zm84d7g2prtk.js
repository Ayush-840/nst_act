const filePath = path.join(__dirname, 'story.txt');
// TODO 1: Create a read stream for story.txt
//         using fs.createReadStream()
const stream=fs.createReadStream();
// TODO 2: Listen for the 'data' event
//         Every time a chunk arrives, print:
//         "--- New Chunk Received ---"
// TODO 3: Listen for the 'end' event
//         When file is fully read, print:
//         "--- Finished Reading Story ---"
// DO NOT MODIFY BELOW THIS LINE
module.exports = {
    stream: typeof stream !== 'undefined' ? stream : null
stream.on("data",()=>{
})
const path = require('path');
const fs = require('fs');
    console.log("--- New Chunk Received ---")
stream.on("end",()=>{
    console.log("--- Finished Reading Story ---")
})
};