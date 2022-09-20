const { response } = require("express");
const pool = require("../database");
const { getUsers } = require("../queries/user.queries");

exports.displayHome = async (req, res) => {
  try {
    const results = await getUsers();
    res.status(200).json({ count: results.rowCount, users: results.rows });
  } catch (error) {
    throw error;
  }
};
