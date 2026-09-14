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
    fs.readFile((filePath,`utf8`,(err,data)=>{
    const filePath = path.join(__dirname, 'message.txt');
const app = http.createServer((req, res) => {
const path = require('path');
const fs = require('fs');
const http = require('http');