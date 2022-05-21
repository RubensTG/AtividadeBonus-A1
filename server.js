const express = require("express")

let app = express()

app.get('/', function (req, res) {
    res.status(200)
    return res.send("ROTA / foi acessada")
})

app.get('/produtos', function (req, res) {
    res.status(200)
    return res.send("ROTA /produtos foi acessada")
})

app.get('/filmes/:id', function (req, res) {
    res.status(200)
    return res.send("ROTA /filmes/" + req.params.id + " foi acessada")
})

app.get('/filmes', function (req, res) {
    res.status(400)
    return res.send("Parâmetros inválidos!")
})

app.post('/musica/:id/:autor/:genero', function (req, res) {
    res.status(200)
    return res.json([{
        id: req.params.id,
        autor: req.params.autor,
        genero: req.params.genero
    }
    ]);
})

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000 ...");
})