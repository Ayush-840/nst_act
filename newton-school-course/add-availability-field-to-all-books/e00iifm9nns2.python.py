//query goes here
db.books.updateMany(
  {},
  { $set: { available: true } }
);