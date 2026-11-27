db.weekly_outfits.insertMany([
  {
    day: "Monday",
    attire: "Jeans and T-shirt",
    footwear: "Sneakers"
  },
  {
    day: "Tuesday",
    attire: "Kurta Pajama",
    footwear: "Kolhapuri sandals",
    special_about_today: "traditional day"
  },
  {
    day: "Wednesday",
    attire: "Formal Shirt and Trousers",
    footwear: "Loafers"
  }
]);

db.weekly_outfits.find();