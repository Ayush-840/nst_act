});
    }
      return res.status(401).json({
        error: "Unauthorized",
        message: "Invalid username or password.",
    });
    if (!user) {
    const user = await prisma.user.findUnique({
      where: { username },
    const password = rawPassword;
    // 2. Find user in database using Prisma
    }
    const username = rawUsername.trim();
        error: "Bad Request",
        message: "Missing authentication credentials in headers.",
      });
    ) {
      return res.status(400).json({
      rawUsername.trim().length === 0 ||
      rawPassword.trim().length === 0
    if (
      typeof rawUsername !== "string" ||
      typeof rawPassword !== "string" ||
    // 1. Validate headers are present, strings, and not empty/whitespace-only
    const rawUsername = req.headers["username"];
    const rawPassword = req.headers["password"];
const authenticateUser = async (req, res, next) => {
  try {
app.use(express.json());
const app = express();
const prisma = require("./db");
const bcrypt = require("bcrypt");
const express = require("express");