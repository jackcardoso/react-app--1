const db = require("./config/dbconfig");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { nome,descricao } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (nome, descricao) VALUES ($1, $2)",
    [nome, descricao]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: {nome, descricao }
    },
  });
};

