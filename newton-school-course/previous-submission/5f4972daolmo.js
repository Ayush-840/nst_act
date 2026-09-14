// Write your route handling logic here
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("User created");
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Not Found");
    }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = app;