const db = require("./config/bd.config");
const { Pool } = require("pg");
const pool = new Pool(db);

// Retrieve all noticias from the database.
const produto = (req, res) => {
  try {
    const { nome,descricao } = req.body;
    const result = pool.query("INSERT INTO products (nome, descricao) VALUES ($1, $2)",[nome, descricao]);
    let string = `<p>O produto com nome: ${nome} foi criado, sua descrição é: ${descricao}</p>`;
    res.render(string);
    console.log('O produto foi criado!', nome, descricao);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

module.exports = {
  produto,
};