const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));
// require("./src/p.routes")(app);

app.use(bodyParser.urlencoded({extended: true}));


const home = require('./src/index');
const about = require('./src/about');
const insertData = require('./src/novoProduto');
const criar = require('./src/criar');


app.get('/', home);
app.get('/about', about);
app.get('/novoProduto', insertData);

app.post('/criarProduto', criar.produto)


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

module.exports = app;

