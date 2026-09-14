});
server.listen(3000, () => {
  console.log('Server listening on port 3000');
  if(req.method==="GET" && req.url==="/"){
    res.writeHead(200,{"content-Type":"text/plain"});
  }
    res.end("Home page");
  // Your code here
  }
    res.writeHead(404,{"content-type":"text/plain"});
  }
    res.end("404 Not Found");
    const id= req.url.split("/")[2];
    res.writeHead(200,{"content-type":"text/plain"})
    res.end(`Fetching item with id ${id}`)
});
const server = http.createServer((req, res) => {
  else if(req.method==="GET" && req.url.startsWith("/item/")){
  else
  {
module.exports = { server };
const http = require('http');