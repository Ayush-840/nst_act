let validAge = true;
  for (let i = 0; i < age.length; i++) {
    if (age[i] < "0" || age[i] > "9") {
      validAge = false;
      break;
    }
  }
  const ageNumber = Number(age);
  if (!validAge || ageNumber < 18 || ageNumber > 100) {
    return res.status(400).json({
      error: "Invalid age"
    });
  }
  // Validate city
  const validCities = ["Mumbai", "Delhi", "Bangalore", "Kolkata"];
  if (
    typeof city !== "string" ||
    city.trim().length < 4 ||
    !validCities.includes(city)
  ) {
    return res.status(400).json({
      error: "Invalid city"
    });
  }
  next();
};
module.exports = { validateUser };