const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const pool = require("./database");
const indexRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(indexRoutes);

app.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(PORT, () => {
  console.log("Serveur lancé !");
});
