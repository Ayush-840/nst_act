}
    return res.status(500).json({
      error: "Unable to retrieve tasks"
    });
    return res.json(tasks);
  } catch (error) {
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
  }
});
    return res.status(500).json({
      error: "Unable to create task"
    });
    return res.status(201).json(task);
  } catch (error) {
        ...(completed !== undefined && { completed })
      }
    });
    const task = await prisma.task.create({
      data: {
        title,
    const { title, completed } = req.body;
app.post("/tasks", async (req, res) => {
  try {
app.use(express.json());
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");