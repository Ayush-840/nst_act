const { application } = require('express');
dotenv.config();
let count=0;
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    else{res.writeHead(404,{"content-type":"application/json"})
    res.end(JSON.stringify({message:"Not Found"}))}
    if(req.method==="GET" && req.url=="/visit"){
        res.writeHead(200,{"content-type":"application/json"});
    }
        count+=1
        res.end(JSON.stringify({count}))
    // Write your logic here
const app = http.createServer((req, res) => {
module.exports = app;