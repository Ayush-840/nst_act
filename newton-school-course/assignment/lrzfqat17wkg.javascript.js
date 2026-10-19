// const app = express();
// if (require.main === module) {
//   app.listen(3000, () => console.log('Server running on port 3000'));
// }
// module.exports = app;
// const express = require('express');
const express = require('express');
const app = express();
// 1. Import the inventory router from the routes folder
const inventoryRouter = require('./routes/inventory.router');
// 2. Add the built-in JSON body-parsing middleware
app.use(express.json());
// 3. Mount the router under the /api/inventory prefix
app.use('/api/inventory', inventoryRouter);
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
module.exports = app;