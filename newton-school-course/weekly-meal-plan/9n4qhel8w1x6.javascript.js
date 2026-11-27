db.weekly_meals.insertOne({
  day: "Monday",
  breakfast: "Oatmeal with fruits",
  lunch: "Grilled chicken salad",
  dinner: "Vegetable soup",
  special_note: "Healthy start of the week"
});

db.weekly_meals.find().pretty();