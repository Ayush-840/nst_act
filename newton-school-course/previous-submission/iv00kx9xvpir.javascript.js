const validGpa = typeof data.gpa === "number" && !Number.isNaN(data.gpa) && data.gpa >= 0 && data.gpa <= 4;
      if (data && validName && validGpa) {
        res.writeHead(200);
        res.end(JSON.stringify({ status: "success" }));
      } else {
        res.writeHead(400);
        res.end(JSON.stringify({ status: "failed" }));
      }
    } catch (err) {
      res.writeHead(400);
      res.end(JSON.stringify({ status: "failed" }));
    }
  });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
module.exports = server;
      const validName = typeof data.name === "string" && data.name.trim().length > 0;
      const data = JSON.parse(body);
    try {
  req.on("end", () => {
  });
    body += chunk;
  req.on("data", (chunk) => {
  }
  let body = "";
    return;
    res.writeHead(400);
    res.end(JSON.stringify({ status: "failed" }));
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") {
const server = http.createServer((req, res) => {
const http = require("http");