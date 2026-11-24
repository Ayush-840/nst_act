fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "File read error" }));
            return;
        }
        const lines = data.trim().split("\n").filter(line => line.trim() !== "");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ totalOrders: lines.length }));
    });
})
server.listen(3000)
const server=http.createServer((req,res)=>{
    const filePath = path.join(__dirname, "orders.txt");
const http = require("http");
const fs = require("fs");
// Create an HTTP server