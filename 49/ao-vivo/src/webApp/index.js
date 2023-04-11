const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Opção 1
const produtosController = require('./controllers/produtos.controller')
// Opção 2
// const { requererProdutos } = require('./controllers/produtos.controller')

const contaController = require('./controllers/conta.controller')

const autorizar = require('./middleware/autorizar.middleware')

const webApp = express()

webApp.set('views', path.join(__dirname, 'views'))
webApp.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
webApp.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
webApp.use(bodyParser.json())
webApp.use(express.static(path.join(__dirname, 'public')))

// Opção 1
webApp.get(
    // Rota
    '/produtos',
    // Middleware (Interceptador)
    autorizar,
    // Controlador 
    produtosController.requererProdutos
)
// Opção 2
// webApp.get('/', requererProdutos)
// webApp.get(
    // Rota
//    '/produtos/:token',
    // Middleware (Interceptador)
//    (req, res, next) => {
        // localhost:1234/produtos/dh
//        const { token } = req.params
//
//        if(token != "dh")
//            res.send("Não tem autorização")
//        else 
//            next()
//    },
    // Controlador 
//    requererProdutos
//)
webApp.get(
    '/autenticar', 
    contaController.autenticar
)
webApp.post(
    '/autenticar/validar',
    contaController.validarAutenticacao
)

webApp.get(
    '/registrar',
    contaController.registrar
)
webApp.post(
    '/registrar',
    contaController.cadastrarUsuario
)

webApp.listen('1234', () => console.log('servidor online'))