const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { validateName } = require("./middleware");
app.use(validateName);
app.get("/greet", (req, res) => {
  const  name  = req.query.name;
  return res.status(200).json({ message: `Hello, ${name}!` });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});