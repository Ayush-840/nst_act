});
server.listen(3000, () => {
  console.log('Server listening on port 3000');
  if(req.method==="GET" && req.url==="/"){
    res.writeHead(200,{"content-Type":"text/plain"});
  }else if(req.method==="GET" && req.url.startsWith("/item/")){
    res.end("Home page");
  // Your code here
  }else{
    res.writeHead(404,{"content-type":"text/plain"});
  }
    res.end("404 Not Found");
const server = http.createServer((req, res) => {
    const id= req.url.split("/")[2];
    res.writeHead(200,{"content-type":"text/plain"})
    res.end(`Fetching item with id ${id}`)
});
module.exports = { server };