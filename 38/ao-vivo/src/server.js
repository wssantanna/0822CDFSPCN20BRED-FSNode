
const express = require('express')
const path = require('path')

const RotasAPI = require('./router')
const RotasViews = require('./router-views')

/*
const ProdutosController = require('./controllers/produtos.controller')
const ContaController = require('./controllers/minha-conta.controller')
const GuardiaoMiddleware = require('./middleware/guardiao.middleware')
*/
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use('/api', RotasAPI)
app.use('/',RotasViews)

/*
app.post('/api/autenticar', ContaController.autenticar)
app.post('/api/cadastrar',  ContaController.cadastrar)
app.get('/api/produtos',    GuardiaoMiddleware.autorizar, ProdutosController.requererTodos)
*/

app.listen('1234', () => console.log('Servidor online!'))