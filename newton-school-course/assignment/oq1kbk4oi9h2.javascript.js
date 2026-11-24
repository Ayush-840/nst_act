const bcrypt = require("bcrypt");
const prisma = require("./prisma"); // adjust path to your PrismaClient instance
const authenticateUser = async (req, res, next) => {
  try {
    const rawUsername = req.headers["username"];
    const rawPassword = req.headers["password"];
    // 1. Validate headers are present, strings, and not empty/whitespace-only
    if (
      typeof rawUsername !== "string" ||
      typeof rawPassword !== "string" ||
      rawUsername.trim().length === 0 ||
      rawPassword.trim().length === 0
    ) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Missing authentication credentials in headers.",
      });
    }
    const username = rawUsername.trim();
    const password = rawPassword;
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