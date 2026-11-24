const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const secureRouter = require("./routes/secure.router");
const app = express();
app.get('/public-info', (req, res) => res.send("Free Public Content"));
app.use('/secret', secureRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});