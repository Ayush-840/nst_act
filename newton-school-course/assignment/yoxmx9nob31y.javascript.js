const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const coursesFilePath = path.join(__dirname, "courses.json");
router.delete("/:id", (req, res) => {
  try {
    const rawData = fs.readFileSync(coursesFilePath, "utf8");
    const courses = JSON.parse(rawData);
    const courseIndex = courses.findIndex(
      (course) => String(course.id) === String(req.params.id)
    );
    if (courseIndex === -1) {
      return res.status(404).json({ error: "Course not found" });
    }
    const [deletedCourse] = courses.splice(courseIndex, 1);
    fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2), "utf8");
    return res.status(200).json(deletedCourse);
  } catch (err) {
    return res.status(500).json({ error: "Unable to update course data" });
  }
});
module.exports = router;