const express = require('express');
const deviceRoutes = require('./routes/devices.routes');
const app = express();
app.use(express.json());
app.use('/api', deviceRoutes);
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
module.exports = app;