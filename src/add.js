module.exports = (req, res) =>{
     
        const { pool } = require('./config/dbconfig');
    
        async function insertDataBanco() {
          try {
            const res = await pool.query('INSERT INTO products(nome,descricao) VALUES(?,?)', [req.body.nome, req.body.descricao]
            );
            console.log(`Added a products with the name ${nome}`);
          } catch (error) {
            console.error(error)
          }
        }
        
        insertDataBanco();
        console.log(req.body.nome);
    
    };



