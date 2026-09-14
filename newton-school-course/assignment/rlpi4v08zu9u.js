// Your routing logic here
server.listen(3000, () => {
  if(req.url==="/about"){
  console.log('Server running on port 3000');
      "content-Type":"text/plain"
    });
});
    res.writeHead(200,{
    res.end("About Us Page");
  }
});
  else{
    res.writeHead(404,{"content-Type":"text/plain"});
  }
module.exports = server;
    res.end("Not Found");
const server = http.createServer((req, res) => {
const http = require('http');