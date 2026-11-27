db.users.insertOne({
  name: "Ravi Sharma",
  email: "ravi@example.com",
  address: {
    street: "12 MG Road",
    city: "Pune",
    zip: "411001"
  }
});

db.users.find();