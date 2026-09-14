const app = http.createServer((req, res) => {
    // Write your routing logic here
});
dotenv.config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    if(req.url==="/login"){
        res.writeHead(200,{"content-Type":"text/plain"});
    }else if(req.url==="/dashboard"){
        res.end("Please Login");
    }else{
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end("Welcome to your Dashboard");
        res.writeHead(404,{"content-Type":"text/plain"});
    }
        res.end("Page Not Found");
module.exports = app;
const dotenv = require("dotenv");