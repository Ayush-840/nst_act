// 1. Insert the character documents
db.characters.insertMany([
  { name: "Doraemon", type: "Robot Cat" },
  { name: "Nobita", type: "Human" },
  { name: "Shizuka", type: "Human" }
]);

// 2. Find all Human characters
db.characters.find({ type: "Human" });

// 3. Count how many Robot Cat characters exist
db.characters.countDocuments({ type: "Robot Cat" });