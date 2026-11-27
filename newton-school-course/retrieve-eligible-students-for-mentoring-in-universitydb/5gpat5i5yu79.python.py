// solution goes here
db.books.findOne({
  genre: "Classic",
  isAvailable: true
});