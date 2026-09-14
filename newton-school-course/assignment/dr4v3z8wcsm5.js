const app = http.createServer((req, res) => {
    // FIX THIS LINE BELOW
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(<h1>Welcome</h1>);
});
// DO NOT MODIFY BELOW THIS LINE
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}
module.exports = { app };
const http = require('http');