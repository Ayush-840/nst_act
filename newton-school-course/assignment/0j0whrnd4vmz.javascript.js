const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
// Load environment variables
dotenv.config();
// Creating App
const app = express();
// Creating Prisma instance
const prisma = new PrismaClient();
// Middleware to parse JSON requests
app.use(express.json());
// Define routes
app.get('/', (req, res) => {
  res.status(200).send("Hello World!!");
});
// Set the port from environment variable or default to 3000
const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Export app and prisma instances
module.exports = { app, prisma };