// DO NOT MODIFY BELOW THIS LINE
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}
module.exports = { app };
});
    res.end('<h1>Welcome</h1>');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // FIX THIS LINE BELOW
const app = http.createServer((req, res) => {
const http = require('http');