const express = require("express");
const path=require("path")
const app = express();
// Write your code here
// console.log(_dirname)
let pathtoFolder=path.join(__dirname,"dist");
app.use("/assets",express.static(pathtoFolder));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;