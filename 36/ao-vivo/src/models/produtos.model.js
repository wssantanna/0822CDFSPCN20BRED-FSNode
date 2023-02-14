const database = require('./__mockdatabase__');

function obterProdutos() {

    const produtos = database.produtos;

    return produtos;
}

module.exports = { obterProdutos }