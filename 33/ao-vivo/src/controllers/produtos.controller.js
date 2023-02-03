const produtoModel = require('../models/produtos.model');

function requererProdutos(req, res) {

    const { numeroDeItensPorPagina } = req.query;

    let titulo = 'Estoque';

    const produtos = numeroDeItensPorPagina 
        ? produtoModel.obterItems(numeroDeItensPorPagina) 
        : produtoModel.obterItems();

    res.render('produtos', {
        titulo,
        produtos
    });
    
}

function requererProdutoPorId(req, res) {
    
    const { id } = req.params;

    const produto = produtoModel.obterUmItemPelaId(id) ?? {};

    res.render('produto', {
        produto
    });
}

module.exports = { requererProdutos, requererProdutoPorId };