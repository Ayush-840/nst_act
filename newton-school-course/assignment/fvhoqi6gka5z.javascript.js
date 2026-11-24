const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.APP_PORT || 3000;
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page does not exist");
  }
});
app.listen(PORT);
module.exports = app;