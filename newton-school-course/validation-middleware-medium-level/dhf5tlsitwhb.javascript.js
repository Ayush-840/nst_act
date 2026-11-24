const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const { validateUser } = require("./validateMiddleware");
app.get("/user", validateUser, (req, res) => {
  res.status(200).json({
    message: `Welcome, ${req.query.name} from ${req.query.city}! your age is ${req.query.age}`
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});