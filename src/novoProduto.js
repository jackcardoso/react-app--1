module.exports = (req, res) =>{
    res.send(`
    <html>
        <head>
            <meta charset="utf-8">
            <title>INSERT PRODUCT</title>
        </head>
        <body>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/insertData">Insert</a></li>
        </ul>
            <h1>Rota INSERT PRODUCT</h1>
            <form action="/criarProduto" method="POST">
                <input type='text' name='nome' id='nome'>
                <input type='text' name='descricao' id='descricao'>
                <input type='submit' value='enviar'>
        </body>
    </html>
    `)
}