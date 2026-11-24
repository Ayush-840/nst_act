const fs = require('node:fs');
const path = require('node:path');
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'message.txt');
const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    if (method === 'GET' && pathname === '/read') {
        // Async read operation using fs.readFile
        fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
module.exports = server;