module.exports = app;
});
    console.log(`Server running on port ${PORT}`);
app.listen(PORT, () => {
const PORT = process.env.PORT;
});
    }
        res.end('Not Found');
        res.writeHead(404, { 'Content-Type': 'text/plain' });
    else {
    }
        });
            res.end(JSON.stringify({ status: "Success" }));
            }
            res.writeHead(201, { 'Content-Type': 'application/json' });
                console.error('Invalid JSON received:', err.message);
            } catch (err) {
                console.log(feedback);
        req.on('end', () => {
            try {
                const feedback = JSON.parse(bodyChunks);
            bodyChunks += chunk.toString();
        });
        // Runs when the stream has finished
        let bodyChunks = '';
        // Collect the incoming data chunks
        req.on('data', (chunk) => {
const app = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/feedback') {