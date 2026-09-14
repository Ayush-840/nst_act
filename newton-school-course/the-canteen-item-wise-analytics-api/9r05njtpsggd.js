// BUG: Fix the lines below so the server
    // returns a proper JSON response
    res.end(JSON.stringify(user));
});
// DO NOT MODIFY BELOW THIS LINE
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}
module.exports = { app };
    };
        name: 'John'
    const user = {
const app = http.createServer((req, res) => {
const http = require('http');
    res.writeHead(200,{'Content-Type': 'application/json'})