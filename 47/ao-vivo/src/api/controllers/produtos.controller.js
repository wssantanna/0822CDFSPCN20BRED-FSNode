const produtosModel = require('../models/produtos.model')

async function requererTodo(req, res) {

    const produtos = await produtosModel.consultarTodos()

    res.status(200).json(produtos)
}

async function requererUmPelaId(req, res) {
    const { id } = req.params

    const produtoProcurado = await produtosModel.consultarUmPorId(id)

    res.status(200).json(produtoProcurado)
}

async function criar(req, res) {

    const novoProduto = req.body

    const produtoCriado = await produtosModel.criar(novoProduto);
        
    res.status(201).json(produtoCriado)

}

async function deletar(req, res) {
    const { id } = req.params

    const produtoDeletado = await produtosModel.deletarProdutoPorId(id)

    res.status(200).json(produtoDeletado)
}

async function atualizar(req, res) {
    const { id } = req.params
    const produto = req.body

    const produtoAtualizado = await produtosModel.atualizarProdutoPorId(id, produto)

    res.status(200).json(produtoAtualizado)
}

module.exports = {
    requererTodo,
    requererUmPelaId,
    criar,
    deletar,
    atualizar
}