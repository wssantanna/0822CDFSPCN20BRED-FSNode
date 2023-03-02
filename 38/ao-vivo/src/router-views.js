
// Opcao 1
// const rotas = require('express').Router()
// Opcao 2
const express = require('express')
const rotas = express.Router()

const GuardiaoMiddleware = require('./middleware/guardiao.middleware')
const ProdutosController = require('./controllers/produtos.controller')

rotas.get('/produtos', GuardiaoMiddleware.autorizar ,ProdutosController.apresentarTela)

module.exports = rotas