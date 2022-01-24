// const db = require("./config/dbconfig");

exports.selectProduct = async (req, res) =>{
//     const { Client } = require('pg')

//     // clients will also use environment variables
//     // for connection information
//     const client = new Client({
//         connectionString: 'postgres://postgres:mypass@localhost:5432/postgres"'
//     })
//     await client.connect()
//     res = await client.query('SELECT NOW()')
//     await client.end()

const { Client } = require('pg');
var connectionString = "postgres://postgres:mypass@localhost:5432/postgres";
const client = new Client({
    connectionString: connectionString
});
client.connect();

}