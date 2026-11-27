//query goes here
db.vehicles.updateMany(
  { company: "Toyota" },
  { $set: { isAvailable: true } }
);

db.vehicles.find();