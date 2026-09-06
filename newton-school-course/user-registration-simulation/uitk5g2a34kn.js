async function register(user) {
  try {
    const res = await registerUser(user);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}