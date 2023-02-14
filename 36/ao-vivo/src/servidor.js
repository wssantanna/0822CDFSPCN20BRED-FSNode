
const express = require('express');

// Controladores
const { requererTodosProdutos } = require('./controllers/produtos.controller');
const { requererAutorizacao } = require('./controllers/autenticar.controller')
// Interceptadores
const { autorizarPorToken } = require('./middlewares/autorizar.interceptador');

const api = express();

// Configurar suporte a requisição e respostas em json.
api.use(express.json());

// Rotas privadas - dependem de autorização.
api.use('/produtos', autorizarPorToken);
api.get('/produtos', requererTodosProdutos);
// Rotas públicas - não dependem de autorização.
api.post('/autenticar', requererAutorizacao);

api.listen('1234', ()=> console.log('Servidor está online.'));