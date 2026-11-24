const createUserProfile = (id, name, age, passion, gender) => {
  const entries = { id, name, age, passion, gender };
  const profile = {};

  for (const [key, value] of Object.entries(entries)) {
    if (value) {
      profile[key] = value;
    }
  }

  return profile;
};