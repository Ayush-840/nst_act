const express = require("express");
const assignmentsController = require("./controllers/assignments.controller");
const app = express();
app.use(express.json());
app.post("/assignments", assignmentsController.createAssignmentHandler);
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}
module.exports = app;