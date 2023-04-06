const express = require('express')

require('../infra')

const produtosController = require('./controllers/produtos.controller')

const api = express()

api.use(express.json())

api.get('/produtos', produtosController.requererTodo)
api.get('/produtos/:id', produtosController.requererUmPelaId)
api.post('/produtos', produtosController.criar)
api.patch('/produtos/:id', produtosController.atualizar)
api.delete('/produtos/:id', produtosController.deletar)

api.listen('1234', () => { console.log('Servidor online!') })