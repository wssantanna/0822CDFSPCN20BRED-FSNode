const { Produtos } = require('../../infra')

function obterProdutos() {

    try {

        const produtos = Produtos.findAll()

        return produtos
    }
    catch(error) {

        return error
    }
}

function obterProdutoPelaId(idProduto) {

    try {
        const produto = Produtos.findByPk(idProduto)

        return produto
    }
    catch(error) {

        return error
    }

}

module.exports = {
    obterProdutos,
    obterProdutoPelaId
}