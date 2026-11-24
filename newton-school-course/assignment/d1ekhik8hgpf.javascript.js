try {
        });
    }
            message: 'Invalid credentials'
        return res.status(400).json({
    if (!user) {
    const user = users.find(u => u.email === email);
    // Find user
    }
        });
            message: 'Email and password are required'
        return res.status(400).json({
    if (!email || !password) {
    // Check missing credentials
    const { email, password } = req.body;
app.post('/login', async (req, res) => {
// User Login
const users = [];
app.use(express.json());
const JWT_SECRET = 'mysecretkey';
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
const authenticateToken = require('./middleware/validate');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const express = require("express");