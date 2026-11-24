const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ version: "1.0.0" }));
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});