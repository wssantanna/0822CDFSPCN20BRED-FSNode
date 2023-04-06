const express = require('express')
const path = require('path')

const produtosController = require('./controllers/produtos.controller')

const webApp = express()

webApp.set('views', path.join(__dirname, 'views'))
webApp.set('view engine', 'ejs')
webApp.use(express.static(path.join(__dirname, 'public')))

webApp.get('/produtos', produtosController.requererTelaDeProdutos)
webApp.get('/produtos/:idProduto', produtosController.requererTelaDeDetalhesDoProduto)

webApp.listen('1234', () => console.log('Servidor online!'))
