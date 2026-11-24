const http = require('http');
const PORT = process.env.PORT || 3000;
const serverStartTime = Date.now();
const SALE_DURATION_MS = 20 * 1000; // 20 seconds
const server = http.createServer((req, res) => {
  const elapsedTime = Date.now() - serverStartTime;
  if (elapsedTime <= SALE_DURATION_MS) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Congratulations! Your coupon code is FLASH20');
  } else {
    res.writeHead(408, { 'Content-Type': 'text/plain' });
    res.end('Sorry! The flash sale has ended.');
  }
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = server;