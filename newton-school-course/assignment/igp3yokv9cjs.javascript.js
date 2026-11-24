const express = require("express");
const rideController = require("./controllers/ride.controller");
const app = express();
app.use(express.json());
app.post("/api/rides/request", rideController.requestRide);
if (require.main === module) {
    app.listen(3000, () => console.log("Server running on port 3000"));
}
module.exports = app;