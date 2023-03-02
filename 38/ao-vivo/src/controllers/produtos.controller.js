const ProdutosModel = require('../models/produtos.model')

function requererTodos(req, res) {

    // ?chave=valor
    const { } = req.query
    // /parametro
    const { } = req.params
    
    const produtos = ProdutosModel.obterItens()

    if(produtos.length == 0) {
        res.status(404).json({ mensagem: 'Sem produtos cadastrados' })
    }
    else {

        res.status(200).json(produtos)
    }

}

function apresentarTela(req, res) {
    const produtos = ProdutosModel.obterItens()

    if(produtos.length == 0) {
        res.render('error')
    }
    else {
        res.render('produtos', { produtos })
    }
}

module.exports = { requererTodos, apresentarTela }