const express = require('express');
const bodyParser = require('body-parser')
const app = express();



const home = require('./src/index');
const about = require('./src/about');
const insertData = require('./src/insertData');
const add = require('./src/add');

app.get('/', home);
app.get('/about', about);
app.get('/insertData', insertData);

app.use(bodyParser.urlencoded({extended: true}));

app.post('/add', add);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

module.exports = app;

