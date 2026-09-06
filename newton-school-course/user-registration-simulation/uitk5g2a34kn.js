// ─── 2 ───
async function register(user) {
  try {
    const res = await registerUser(user);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// ─── 3 ───
{ "username": "anonymous", "password": "123456" }