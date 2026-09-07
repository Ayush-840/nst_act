const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { validateName } = require("./middleware");
app.use(validateName);
app.get("/greet", (req, res) => {