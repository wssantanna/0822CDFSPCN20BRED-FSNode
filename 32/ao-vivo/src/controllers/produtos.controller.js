// Realizo a importação das funcionalidades da modal. 
const produtosModel = require('../models/produtos.model');
// Nota: É possível realizar a separação das funções através do recurso de desestruturação.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// const { obterUmItemPorId } = require('../models/produtos.model');

// Controlador responsável por receber a requisição e responder com a lista de produtos.
const requererTodosProdutos = (req, res) => {
    // Armazenei o título da página.
    const titulo = "Frutas";
    // Armazenei o resultado da listagem vinda do modelo reponsável por consultar o banco de dados.
    const sacola = produtosModel.obterItens();
    // Nota: Esse trecho seria correto, caso fizessemos a separação das funções através do recurso desestruturação,
    // trecho do código na linha 5. 
    // const sacola = obterUmItemPorId();

    // Renderizo da tela (view) a partir dos dados enviados "titulo" e "sacola".
    res.render('produtos', { 
        titulo,
        sacola
    });
}

// Controlador responsável por receber a requisição de um produto a partir do valor de sua Id (identificado único).
const requererUmProdutoApartirId = (req, res) => {
    // Realizo destruturação da id para facilitar manipulação.
    // Nota: Outra forma de acesso o valor seria req.parms.id.
    const { id } = req.params;
    // Armazenei o título da página.
    const titulo = "Informações do produto";
    // Armazenei o resultado da pesquisa vinda do modelo reponsável por consultar o banco de dados.
    const produto = produtosModel.obterUmItemPorId(id)

    // Renderizo da tela (view) a partir dos dados enviados "titulo" e "produto".
    res.render('produto', { 
        titulo,
        produto
    });
}

// Exporto dos controladores requererTodosProdutos, requererUmProdutoApartirId
module.exports = { 
    requererTodosProdutos, 
    requererUmProdutoApartirId 
};