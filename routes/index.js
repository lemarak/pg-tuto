const router = require("express").Router();

const users = require("./users.routes");

router.use("/users", users);

router.get("/", (req, res) => {
  res.redirect("/users");
});

module.exports = router;
