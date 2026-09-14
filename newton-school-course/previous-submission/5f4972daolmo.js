// Write your route handling logic here
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("User created");
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Not Found");
    }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    }else if(req.method==="POST" && req.url==="/users"){
        res.end("Fetching users...");
        res.writeHead(200,{"content-type":"text/plain"});
    if(req.method==="GET" && req.url==="/users"){
const app = http.createServer((req, res) => {
dotenv.config();
const dotenv = require("dotenv");
        console.log("Creating user...");
module.exports = app;