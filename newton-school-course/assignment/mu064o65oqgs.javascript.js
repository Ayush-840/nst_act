const express = require("express");
const vendingController = require("./controllers/vending.controller");
const app = express();
app.use(express.json());
app.post("/hardware/buttons/:slotId", vendingController.vendItem);
if (require.main === module) {
    app.listen(3000, () => console.log("Vending machine running on port 3000"));
}
module.exports = app;