const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, 'courses.json');
router.get('/', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read course data' });
        }
        try {
            const courses = JSON.parse(data);
            res.status(200).json(courses);
        } catch (parseError) {
            res.status(500).json({ error: 'Unable to read course data' });
        }
    });
});
module.exports = router;