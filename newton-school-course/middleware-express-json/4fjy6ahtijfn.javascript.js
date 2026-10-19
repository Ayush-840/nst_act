app.use(express.json());
const app = express();
const express = require("express");
app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.post("/echo", (req, res) => {
//   res.json({ received: req.body });
// });
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
dotenv.config();
const dotenv = require("dotenv");