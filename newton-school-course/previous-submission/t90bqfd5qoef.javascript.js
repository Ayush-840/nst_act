age.startsWith("0")
  ) {
    age === "" ||
    age.length > 3 ||
  // Validate age
  if (
    typeof age !== "string" ||
  }
      error: "Invalid name"
    });
  if (!validName) {
    return res.status(400).json({
  }
    }
        break;
      }
      ) {
        validName = false;
          (char >= "a" && char <= "z")
        )
    return res.status(400).json({
      error: "Invalid age"
    });
  }
  let validAge = true;
  for (let i = 0; i < age.length; i++) {
    if (age[i] < "0" || age[i] > "9") {
      validAge = false;
      break;
    }
  }
  const ageNumber = Number(age);
  if (!validAge || ageNumber < 18 || ageNumber > 100) {