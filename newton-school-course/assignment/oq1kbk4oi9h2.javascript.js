// 2. Find user in database using Prisma
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Invalid username or password.",
      });
    }
    // 3. Compare provided password with stored hashed password
    // Check common password field names (passwordHash / password)
    const storedHash = user.passwordHash ?? user.password;
    const isPasswordValid = await bcrypt.compare(password, storedHash);
    if (!isPasswordValid) {
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
module.exports = authenticateUser;
    const password = rawPassword;
    const username = rawUsername.trim();