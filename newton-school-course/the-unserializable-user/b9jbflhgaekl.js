res.end(data);
        }
            res.writeHead(200,{"content-Type":"text/plain"});
        else{
        }
            })
            res.end("Internal Server Error: Could not read file.")
            res.writeHead(500,{"content-Type":"text/plain"
    fs.readFile(filePath,(err,data)=>{
        if (err){
    // TODO: Read message.txt asynchronously using fs.readFile()
    const filePath = path.join(__dirname, 'message.txt');
const app = http.createServer((req, res) => {
const path = require('path');
    })
    // TODO: If file read is successful: