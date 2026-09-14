const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = http.createServer((req, res) => {
    // Write your route handling logic here
    res.writeHead()
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
module.exports = app;