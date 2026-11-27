// Query the DB here
db.books.findOne({
  genre: "Science Fiction",
  isAvailable: true
});