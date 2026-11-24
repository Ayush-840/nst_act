const express = require("express");
const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");
const app = express();
const attendanceSystem = new EventEmitter();
app.use(express.json());
const csvFilePath = path.join(__dirname, "attendance_9am_class.csv");
if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(csvFilePath, "Student Name,Time,Status\n");
}
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentTimeString = now.toLocaleTimeString();
// Write your POST /checkin route here
if (require.main === module) {
    app.listen(3000);
}
module.exports = { app, attendanceSystem };