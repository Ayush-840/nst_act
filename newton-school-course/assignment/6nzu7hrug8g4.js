if (id && id.includes("fail")) return setTimeout(() => rej(new Error("Credit service down")), 50);
    setTimeout(() => res({ score: 740 }), 50);
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
module.exports = { app, getProfile, getCreditScore };