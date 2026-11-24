if (require.main === module) {
    app.listen(3000);
}
module.exports = { app, attendanceSystem, csvFilePath };
});
  }));
    });
      resolve();
      if (err) console.error(err);
    fs.appendFile(csvFilePath, row, (err) => {
  writeQueue = writeQueue.then(() => new Promise((resolve) => {
  const row = `${safeName},${time},${status}\n`;
  const safeName = name.includes(",") || name.includes("\"") ? `"${name.replace(/"/g, "\"\"")}"` : name;
  const { name, time, status } = data;
attendanceSystem.on("studentArrived", (data) => {
let writeQueue = Promise.resolve();
});
    });
        student: studentData
        message: "Check-in recorded",
    res.status(200).json({
    attendanceSystem.emit("studentArrived", studentData);
    };
        status
        time: now.toISOString(),
        name: trimmedName,
    const studentData = {