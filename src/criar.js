const db = require("./config/bd.config");
const { Pool } = require("pg");
const pool = new Pool(db);

// Retrieve all noticias from the database.
const produto = (req, res) => {
  try {
    const { nome,descricao } = req.body;
    const result = pool.query("INSERT INTO products (nome, descricao) VALUES ($1, $2)",[nome, descricao]);
    let string = `<p>O produto com nome: ${nome} foi criado, sua descrição é: ${descricao}</p>`;
    res.send(string);
    console.log('O produto foi criado!', nome, descricao);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

function criarDB (){
  try {
    const create = pool.query("CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, nome varchar(100) NOT NULL, descricao varchar(200) not NULL)");
    let string = "A tabela foi criada com sucesso!";
    console.log(string);
  } catch (err) {
    console.log("deu merda!");
  }

}
criarDB();


module.exports = {
  produto,
};