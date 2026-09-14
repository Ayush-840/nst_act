const http = require('http');
const dotenv = require('dotenv');
const { application } = require('express');
dotenv.config();
const app = http.createServer((req, res) => {
    // Write your logic here
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    res.writeHead(404,{"content-type":"application/json"})
    res.end("Not Found")
module.exports = app;