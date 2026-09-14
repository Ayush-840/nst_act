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
    return res.status(500).json({
      error: "One or more external services failed.",
    });
  catch (error) {
  }
});
// TODO: Create an async GET route for /api/dashboard/:userId
// 1. Capture the userId from the parameters
// 2. Trigger getProfile and getCreditScore concurrently without using Promise.all()
// 3. Await each promise individually
// 4. Combine the results with the userId and return as JSON
// 5. Implement a try/catch block that catches errors and returns a 500 status with the specified JSON signature
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});