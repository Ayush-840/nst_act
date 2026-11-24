});
        message: 'Invalid credentials.',
        error: 'Unauthorized',
      return res.status(401).json({
    if (!user) {
    });
      where: { email },
    const user = await prisma.user.findUnique({
    }
      });
        message: 'Email and password headers are required.',
        error: 'Bad Request',
      return res.status(400).json({
    if (!email || !password) {
    const password = req.headers['password'];
    const email = req.headers['email'];
  try {
const authenticate = async (req, res, next) => {
// Middleware to protect restricted endpoints like /analytics
};
  };
    region: 'Asia-South',
    serverStatus: 'Optimal',
    booksLoaned: 1150,
    activeUsers: 3420,
const getAnalyticsData = () => {
  return {
// Mock analytics service response payload
const app = express();
app.use(express.json());
const prisma = require('./db');
const express = require('express');
const bcrypt = require('bcrypt');