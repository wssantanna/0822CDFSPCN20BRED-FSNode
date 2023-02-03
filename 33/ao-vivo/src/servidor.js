
const express = require('express');

const path = require('path');

const produtosController = require('./controllers/produtos.controller');

const api = express();

// Configuração do express
// Exemplo de caminho absoluto.
// C:\Users\wssantanna\Desktop\0822CDFSPCN20BRED-FSNode\33\ao-vivo\src\ + views
api.set('views', path.join(__dirname, 'views'));
api.set('view engine', "ejs");

// Configurar o acesso a arquivos estáticos (css, javascript, imagens, etc)
api.use(express.static(path.join(__dirname, 'public')));

// http => get, post, put/path, delete
api.get('/produtos', produtosController.requererProdutos);
api.get('/produtos/:id', produtosController.requererProdutoPorId);

/** 

api.get('semSepararEmPastas', (req, res) => {
    
    let titulo = 'Todos os produtos';

    const produtos = ['morango', 'banana', 'mamão'];

    res.render('produtos', {
        titulo,
        produtos
    });
});
 */

api.listen('1234', () => console.log('Servidor okay!'));