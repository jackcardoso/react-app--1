
const {Pool} = require('pg');

const pool = new Pool({
  user: "postgres",
  database: "postgres",
  password: "mypass",
  port: 5432,
  host: "localhost",
});

module.exports = { pool };

