res.status(200).json({
    attendanceSystem.emit("studentArrived", studentData);
        message: "Check-in recorded",
        student: studentData
    });
});
attendanceSystem.on("studentArrived", (data) => {
    const { name, time, status } = data;
    const safeName = String(name ?? "");
    const formattedName = safeName.includes(",")
        ? `"${safeName.replace(/"/g, '""')}"`
        : safeName;
    const row = `${formattedName},${time},${status}\n`;
    fs.appendFile(csvFilePath, row, "utf8", (err) => {
        if (err) {
            console.error("Failed to append attendance record:", err);
        }
    });
});
const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
module.exports = { app, attendanceSystem };