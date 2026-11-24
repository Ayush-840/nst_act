const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    if (req.method==='POST'){
        res.end('Content created successfully')
    }
    // Write your solution here
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});