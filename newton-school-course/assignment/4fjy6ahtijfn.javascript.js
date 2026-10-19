dotenv.config();
const express = require("express");
const app = express();
app.express.use(express.json());
app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const dotenv = require("dotenv");