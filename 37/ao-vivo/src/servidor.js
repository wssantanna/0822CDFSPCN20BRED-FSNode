
const express = require('express');

const api = express();

api.use(express.json());

const { autenticar } = require('./controllers/autenticar.controller');
const { requererTodosProdutos } = require('./controllers/produtos.controller')
const { autorizar } = require('./services/autorizar.service');

// Acessa envio usuario e senha no endereco localhost:12345/autenticar
// Valido se o usuario enviou uma credencial valida
// Retorno uma chave de acesso (cracha/token)
api.post('/autenticar', autenticar);

// Acessa o navegador no endereco localhost:12345/produtos
// Validar se o usuario tem permissao -> autorizar()
// Permite o acesso ao recurso -> Todos os produtos
api.get('/produtos', autorizar, requererTodosProdutos);

api.listen('12345', () => console.log('servidor esta online'));
