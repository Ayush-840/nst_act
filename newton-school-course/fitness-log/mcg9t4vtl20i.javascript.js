db.fitness_log.insertOne({
  day: "Wednesday",
  exercise: "Leg workout",
  duration: 60,
  special_focus: "Leg day"
});

db.fitness_log.find({ day: "Wednesday" });