const express = require("express");
const dotenv = require("dotenv");
const {validateUser} = require('./validateMiddleware')
const app = express();
dotenv.config();
// Add middleware here
app.use(validateUser)
app.get("/user", validateUser,(req, res) => {
  //YOUR CODE
  res.status(200).json({
    message: `Welcome, ${req.query.name} from ${req.query.city}! your age is ${req.query.age}`
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});