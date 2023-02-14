const { obterProdutos } = require('../models/produtos.model');

function requererTodosProdutos(requisicao, resposta) {

    const produtos = obterProdutos();

    resposta.send(produtos);
}

module.exports = { requererTodosProdutos };