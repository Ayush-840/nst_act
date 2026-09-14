// DO NOT MODIFY BELOW THIS LINE
});
    //       - respond with status 500
    //       - send "Internal Server Error: Could not read file."
    // TODO: If file read fails:
    // TODO: If file read is successful:
    //       - respond with status 200
    //       - send the file contents as response body
    }))
            res.end(data);
        }
        else{
            res.writeHead(200,{"content-Type":"text/plain"});
            })
            res.end("Internal Server Error: Could not read file.")
        }
        if (err){
            res.writeHead(500,{"content-Type":"text/plain"
    // TODO: Read message.txt asynchronously using fs.readFile()
    fs.readFile((filePath,(err,data)=>{
    const filePath = path.join(__dirname, 'message.txt');
const app = http.createServer((req, res) => {
const path = require('path');
const fs = require('fs');
const http = require('http');