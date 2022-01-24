const { Pool } = require('pg');


// ==> Conexão com a Base de Dados:
const pool = new Pool({
  // connectionString: 'postgres://postgres:mypass@localhost:5432/postgres'
  connectionString: 'postgres://postgres:mypass@postgres:5432/postgres'
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};


