const moviesPath = path.join(__dirname, 'db.json');
app.get("/movies/:id", (req, res) => {
 const movies = JSON.parse(fs.readFileSync(moviesPath, 'utf8'));
// Write you code here
let id=req.params.id;
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
if(!movie){
});
let movie=movies.find((m)=> String(m.id)===String(id));
  return res.status(404).json({ "message": "Movie not found" });
}
return res.status(200).json(movie);
module.exports = { app };