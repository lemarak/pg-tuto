const { response } = require("express");
const pool = require("../database");
const { getUsers } = require("../queries/user.queries");

exports.displayHome = async (req, res) => {
  const results = await getUsers();
  res.status(200).json({ count: results.rowCount, users: results.rows });
};
