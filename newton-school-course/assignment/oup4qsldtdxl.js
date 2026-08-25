const fs = require("fs");
const server = http.createServer((req, res) => {
  // TODO: Check if the request is GET /history
  // TODO: Read chat.txt
  // TODO: Handle errors and send appropriate responses
const http = require("http");
  if(res.method==="GET" && req.url==="/history"){
});
server.listen(3000, () => {
    res.writeHead(200,{"content-type":"text/plan"})
  }else{
    res.end("Bye")
  }
  console.log("Server running on port 3000");
});