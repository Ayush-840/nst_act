if (typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Invalid student name" });
  }
  const trimmedName = name.trim();
  const now = new Date();
  const time = now.toISOString();
  const cutoff = new Date(now);
  cutoff.setHours(9, 0, 0, 0);
  const status = now.getTime() <= cutoff.getTime() ? "On Time" : "Late";
  const student = {
    name: trimmedName,
    time,
    status,
  };
  attendanceSystem.emit("studentArrived", student);
  return res.status(200).json({
    message: "Check-in recorded",
    student,
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = { app, attendanceSystem };