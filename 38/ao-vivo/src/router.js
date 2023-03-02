
// Opcao 1
// const rotas = require('express').Router()
// Opcao 2
const express = require('express')
const rotas = express.Router()

const ContaController = require('./controllers/minha-conta.controller')
const GuardiaoMiddleware = require('./middleware/guardiao.middleware')
const ProdutosController = require('./controllers/produtos.controller')

rotas.post('/autenticar', ContaController.autenticar)
rotas.post('/cadastrar',  ContaController.cadastrar)
rotas.get('/produtos',    GuardiaoMiddleware.autorizar, ProdutosController.requererTodos)

module.exports = rotas