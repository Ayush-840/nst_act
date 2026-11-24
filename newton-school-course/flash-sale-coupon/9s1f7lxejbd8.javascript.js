require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Homepage');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('This page does not exist');
  }
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = server;