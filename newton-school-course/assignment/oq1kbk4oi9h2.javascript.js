return res.status(401).json({
        error: "Unauthorized",
        message: "Invalid username or password.",
      });
    }
    // 4. Attach authenticated user and pass control to route handler
    req.user = user;
    return next();
  } catch (err) {
    return next(err);
  }
};
// Protected GET /analytics route
app.get("/analytics", authenticateUser, async (req, res) => {
  return res.status(200).json({
    message: "Analytics data retrieved successfully",
    user: {
      id: req.user.id,
      username: req.user.username,
    },
  });
});
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;