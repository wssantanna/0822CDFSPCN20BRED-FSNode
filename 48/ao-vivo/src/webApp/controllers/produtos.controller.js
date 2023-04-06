const produtosModel = require('../models/produtos.model')

async function requererTelaDeProdutos(req, resposta) {

    let produtos = await produtosModel.obterProdutos()

    resposta.render('produtos', { produtos })
}

async function requererTelaDeDetalhesDoProduto(requisicao, resposta) {

    const { idProduto } = requisicao.params
    
    let produto = await produtosModel.obterProdutoPelaId(idProduto)

    resposta.render('produto', { produto })
}

module.exports = {
    requererTelaDeProdutos,
    requererTelaDeDetalhesDoProduto
}