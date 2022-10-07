const express = require("express");

const exphbs = require("express-handlebars");
const port = 8000;
const app = express();

app.use(express.static("public"));

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});