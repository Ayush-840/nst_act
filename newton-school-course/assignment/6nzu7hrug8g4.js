if (id && id.includes("fail")) return setTimeout(() => rej(new Error("Credit service down")), 50);
    setTimeout(() => res({ score: 740 }), 50);
});
app.get("/api/dashboard/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const profilePromise = getProfile(userId);
    const scorePromise = getCreditScore(userId);
    const profile = await profilePromise;
    const score = await scorePromise;
    return res.status(200).json({
      userId,
      ...profile,
      ...score,
    });
  } 
  catch (error) {
    return res.status(500).json({
      error: "One or more external services failed.",
    });
  }
});
const getCreditScore = (id) => new Promise((res, rej) => {
});
    setTimeout(() => res({ name: "Alex" }), 50);
    if (id && id.includes("fail")) return setTimeout(() => rej(new Error("Profile service down")), 50);
const getProfile = (id) => new Promise((res, rej) => {
// Mock asynchronous functions 
// TODO: Create an async GET route for /api/dashboard/:userId
// 1. Capture the userId from the parameters