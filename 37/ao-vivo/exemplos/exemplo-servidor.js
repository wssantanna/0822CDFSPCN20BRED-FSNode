
const express = require('express');

const api = express();

// Autenticar (Gerar um Token)
// Validar se o usuario e senha sao validos...
// Se for valido entrego uma 'autorizacao'.
function autenticar(req, res) {

    const { usuario, senha } = req.body;

    // Comparo se o usuario esta cadastrado
    if(usuario === 'wssantanna' && senha === '1234') {
        res.send('dh-autoriza');
    }
    else {
        res.send('Usuario ou senha nao estao cadastrados!')
    }
}

api.post('autenticar/', autenticar);

// Autorizar (Interceptador)
// Validar a autorizacao valida...
// Se nao for retorna um erro.
function autorizar(req, res, prox) {

    // Exemplo:
    // localhost:12345/produtos?cracha=dh-autoriza
    const { cracha } = req.query;
    // 
    if(cracha == 'dh-autoriza') {
        prox();
    }
    else {
        res.send('Cracha invalido!');
    }
}

// Recurso (Controlador)
// Fica responsavel por permitir ao acesso a o recurso.
function requererTodosProdutos(req, res) {
    res.send('Todos os produtos')
}

// Acessa o navegador no endereco localhost:12345/produtos
// Validar se o usuario tem permissao -> autorizar()
// Permite o acesso ao recurso -> Todos os produtos
api.get('/produtos', autorizar, requererTodosProdutos);

api.listen('12345', () => console.log('servidor esta online'));
