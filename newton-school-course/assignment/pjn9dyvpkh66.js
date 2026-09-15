// TODO: Create a GET route for /json that returns a JSON object
// { "status": "success", "data": "JSON format" }
app.get("/html", (req, res) => {
// TODO: Create a GET route for /html that returns HTML content
// "<h1>Welcome to HTML format</h1>"
app.get("/csv", (req, res) => {
// TODO: Create a GET route for /csv that returns CSV formatting data
// "id,name\n1,Rahul\n2,Priya" and sets the text/csv Content-Type header
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
})
app.get("application/json",(req,res)=>{
    res.type("application/json").send({ status: "success", data: "JSON format" })
})
    res.type("text/html").send("<h1>Welcome to HTML format</h1>");
});
    res.type("text/csv").send("id,name\n1,Rahul\n2,Priya");
})
module.exports = { app };