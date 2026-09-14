const express = require('express');
const app = express();
const port = 3000;
// write your code here 
app.listen(3000)
app.get("/",(req,res)=>{
    res.send("We are learning Express")
})
module.exports = { app };