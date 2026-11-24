const express = require("express");
const app = express();
app.use(express.json());
const watchlist = [
    { id: 0, title: "Inception", year: 2010 },
    { id: 1, title: "The Matrix", year: 1999 }
];
// Write middleware here
// Write routes here
if (require.main === module) {
    app.listen(3000);
}
module.exports = app;