const router = require("express").Router();

const { displayHome } = require("../controllers/users.controller");

router.get("/", displayHome);

module.exports = router;
