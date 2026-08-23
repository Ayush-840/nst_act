const fs = require("fs");
const path = require("path");
const readline = require("readline");
const STUDENTS_FILE_PATH = path.join(__dirname, "students.txt");
fs.readFile(STUDENTS_FILE_PATH, "utf-8", (err, data) => {
    if (err) return;
    console.log("Current Students:");
    console.log(data);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter New Student Name: ", (studentName) => {
        const contentToAppend = `\n${studentName.trim()}`;
        fs.appendFile(STUDENTS_FILE_PATH, contentToAppend, (err) => {
            if (!err) {
                console.log("\nStudent Added Successfully!");
            }
            rl.close();
        });
    });
});