// 1. Insert new student "Luna Lovegood" from "Ravenclaw"
db.students.insertOne({
  name: "Luna Lovegood",
  house: "Ravenclaw",
  borrowed_books: []
});

// 2. Insert the two books
db.books.insertMany([
  { title: "Quidditch Through the Ages", available_copies: 4 },
  { title: "Fantastic Beasts", available_copies: 3 }
]);

// 3. Reference "Fantastic Beasts" (_id) in Luna's borrowed_books & decrement available_copies
const book = db.books.findOne({ title: "Fantastic Beasts" });

db.students.updateOne(
  { name: "Luna Lovegood" },
  { $push: { borrowed_books: book._id } }
);

db.books.updateOne(
  { _id: book._id },
  { $inc: { available_copies: -1 } }
);

// 4. Output all students with borrowed book titles
db.students.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "borrowed_books",
      foreignField: "_id",
      as: "borrowed_book_docs"
    }
  },
  {
    $project: {
      _id: 1,
      name: 1,
      house: 1,
      borrowed_books: {
        $map: {
          input: "$borrowed_book_docs",
          as: "b",
          in: "$$b.title"
        }
      }
    }
  }
]);