const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
        res.writeHead(200,{"content-type":"text/plain"})
    }else if(req.method==="POSt" && req.url==="/users"){
        res.end("Fetching users...")
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("User created");
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
    }
        res.end("Not Found");
module.exports = app;
    if(req.method==="GET" && req.url==="/users"){
    // Write your route handling logic here
const app = http.createServer((req, res) => {
dotenv.config();