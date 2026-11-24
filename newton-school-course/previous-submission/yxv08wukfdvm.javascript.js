const studentData = {
        name: trimmedName,
        time: now.toISOString(),
        status
    };
    attendanceSystem.emit("studentArrived", studentData);
    res.status(200).json({
        message: "Check-in recorded",
        student: studentData
    });
});
let writeQueue = Promise.resolve();
attendanceSystem.on("studentArrived", (data) => {
  const { name, time, status } = data;
  const safeName = name.includes(",") || name.includes("\"") ? `"${name.replace(/"/g, "\"\"")}"` : name;
  const row = `${safeName},${time},${status}\n`;
  writeQueue = writeQueue.then(() => new Promise((resolve) => {
    fs.appendFile(csvFilePath, row, (err) => {
      if (err) console.error(err);
      resolve();
    });
  }));
});
if (require.main === module) {
    app.listen(3000);
}
module.exports = { app, attendanceSystem, csvFilePath };