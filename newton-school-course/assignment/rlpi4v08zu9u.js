const server = http.createServer((req, res) => {
  // Your routing logic here
server.listen(3000, () => {
const http = require('http');
  if(req.url==="/about"){
  console.log('Server running on port 3000');
      "content-Type":"plain/text"
    });
});
    res.writeHead(200,{
    res.end("About Us Page")
  }
});
  else{
    res.writeHead(404,{"content-Type":"plain/text"});
  }
module.exports = server;
    res.end("Not Found")