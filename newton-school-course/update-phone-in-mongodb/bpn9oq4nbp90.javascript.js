//query goes here
db.patients.updateOne(
  {
    name: "Sunil",
    department: "Cardiology"
  },
  {
    $set: {
      "contact.phone": "9876543210"
    }
  }
);

db.patients.find({
  name: "Sunil",
  department: "Cardiology"
});