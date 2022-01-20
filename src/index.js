module.exports = (req, res) =>{
    res.send(`
    <html>
        <head>
            <meta charset="utf-8">
            <title>HOME</title>
        </head>
        <body>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/insertData">Insert</a></li>
        </ul>
            <h1>Rota Home</h1>
        </body>
    </html>
    `)
}