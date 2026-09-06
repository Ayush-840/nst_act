const fs = require("fs");
const path = require("path");

const DB_FILE_PATH = path.join(__dirname, "db.txt");

/**
 * Converts an array of todo objects into a newline-separated string,
 * where each todo object is formatted as pretty-printed JSON.
 * This format is compatible with the expected structure of the db.txt file.
 *
 * @param {Array<Object>} Json - Array of todo objects to be converted.
 * @returns {string} Newline-separated JSON strings representing todos.
 */
function JsonToDbText(Json){
  let text = "";
  Json.forEach((todo) => {
    text += JSON.stringify(todo, null, 2) + "\n";
  });
  return text;
};

const createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        try {
            const now = new Date().toISOString();
            const newTodo = {
                "id": Date.now(),
                "title": todo,
                "isCompleted": false,
                "createdAt": now,
                "updatedAt": now
            };

            const formatted = JsonToDbText([newTodo]);

            fs.appendFile(DB_FILE_PATH, formatted, (err) => {
                if (err) {
                    return reject(err)
                };
                resolve(newTodo); 
            });
        } catch (error) {
        reject(error);
        }
  });
};