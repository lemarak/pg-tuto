const pool = require("../database");

exports.getUsers = (req, res) => {
  return pool.query("SELECT * FROM users ORDER BY name");
};
