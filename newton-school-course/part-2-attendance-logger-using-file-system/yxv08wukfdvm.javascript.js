const studentData = {
        name: trimmedName,
        time: now.toISOString(),
        status
    };
    attendanceSystem.emit("studentArrived", studentData);
    res.status(200).json({
    const status = now <= cutoff ? "On Time" : "Late";
    const cutoff = new Date(now);
    cutoff.setHours(9, 0, 0, 0);
    const now = new Date();
    const trimmedName = name.trim();
        return res.status(400).json({ error: "Student name is required and must be a valid string" });
    }
    if (typeof name !== "string" || name.trim().length === 0) {
app.post("/checkin", (req, res) => {
    const { name } = req.body;
}
    fs.writeFileSync(csvFilePath, "Student Name,Time,Status\n");
const csvFilePath = path.join(__dirname, "attendance_9am_class.csv");
if (!fs.existsSync(csvFilePath)) {
app.use(express.json());
const attendanceSystem = new EventEmitter();
const app = express();
const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");
const express = require("express");