const db = require("./config/bd.config");
const { Pool } = require("pg");
const pool = new Pool(db);

// Retrieve all noticias from the database.
const getProducts = (req, res) => {
  try {
    const result = pool.query("select * from products");
    res.send(result);
    console.log('foi', result);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

module.exports = {
  getProducts,
};