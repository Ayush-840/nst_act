const express = require("express");
const dotenv = require("dotenv");
const inventoryRouter = require("../routes/inventory.router");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/inventory", inventoryRouter);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});